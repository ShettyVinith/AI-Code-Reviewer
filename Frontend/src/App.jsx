import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import axios from "axios";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Markdown from "react-markdown";
import "./App.css";

function App() {
  const [code, setCode] = useState(`
function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState(``);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });

    setReview(response.data);
    setShowIntro(false); // 👈 hide intro after review
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                width: "100%",
                minHeight: "100%", // optional
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>

        <div className="right">
          {showIntro && (
            <div className="intro-text">
              👋 Welcome to the AI Code Reviewer!
              <br />
              Paste or write your code in{" "}
              <strong>any programming language</strong> on the left,
              <br />
              then click <strong>"Review"</strong> to get smart feedback on
              quality, performance, bugs, and best practices.
            </div>
          )}

          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
