# AI Code Reviewer

AI Code Reviewer is a full-stack web application that leverages **Google Gemini AI** to provide automated code reviews. Users can submit code through a web-based editor and receive detailed, actionable feedback on code quality, performance, security, correctness, and more — all powered by AI.

---

## ✨ Features

- **AI-Powered Code Review:** Uses Google Gemini AI for in-depth analysis.
- **Modern Frontend:** Built with React and Vite for a fast, responsive UI.
- **RESTful Backend:** Node.js/Express server integrates with Gemini AI and handles API requests.
- **Live Code Editor:** Real-time code editing with syntax highlighting.
- **Markdown Feedback:** AI reviews are rendered with rich formatting.
- **Responsive, Single Deployment:** Unified frontend and backend project structure.

---

## 📁 Project Structure

```
└── 📁AI-Powered-Code-Reviewer
    └── 📁Backend
        └── 📁src
            └── 📁controllers
                ├── ai.controller.js
            └── 📁routes
                ├── ai.routes.js
            └── 📁services
                ├── ai.service.js
            ├── app.js
        ├── .gitignore
        ├── package-lock.json
        ├── package.json
        ├── server.js
    └── 📁Frontend
        └── 📁public
            ├── logo.png
        └── 📁src
            └── 📁assets
                ├── react.svg
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── README.md
        └── vite.config.js
```
