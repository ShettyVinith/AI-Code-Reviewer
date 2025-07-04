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
├── Backend/ # Express backend (API, AI integration)
├── Frontend/ # React frontend (UI)
```


---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)
- npm

---

### 📌 Backend Setup

1. **Install dependencies:**
    ```sh
   cd BackEnd
   npm install
   ```
2. **Configure environment variables:**
   - Create a `.env` file in the `Backend/` directory:
     ```
     GEMINI_API_KEY=your_google_gemini_api_key
     ```

3. **Start the server:**
   ```sh
   node server.js
   ```
4. API Endpoint:

    - `POST /ai/get-review`
    - Request Body: `{ "code": "<your code here>" }`

5. Backend Project Structure

    - `server.js` – Entry point
    - `src/app.js` – Express app setup
    - `src/routes/ai.routes.js` – API routes
    - `src/controllers/ai.controller.js` – Request handlers
    - `src/services/ai.service.js` – Gemini AI integration
---

## 📌 Frontend Setup

1. **Project Creation:**

    - This React project was created using **Vite**.

        ```bash
        npm create vite@latest
        ```

2. **Install dependencies:**

    ```bash
    cd Frontend
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm run dev
    ```
4. **Open in Browser**

    Visit [http://localhost:5173](http://localhost:5173) (default Vite port).



---

## 🔧 API Configuration

- The frontend expects the backend to run at `http://localhost:3000`

- Update the API URL in `src/App.jsx` if needed.

---

## 🛠️ Tech Stack

### **Frontend:**
- **React**
- **Vite**
- **PrismJS**
- **react-simple-code-editor**
- **react-markdown**
- **axios**

### **Backend:**
- **Node.js**
- **Express**
- **@google/genai**
- **dotenv**
- **cors**

---

## 📄 License

This project is open-source and available under the **MIT License**.

