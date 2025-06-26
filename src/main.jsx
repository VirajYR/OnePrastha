
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    html {
      scroll-behavior: smooth;
    }
    
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, #3B82F6, #8B5CF6);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(45deg, #2563EB, #7C3AED);
    }
  `;
  document.head.appendChild(style);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
