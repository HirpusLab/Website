import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./styles/index.css";
import App from "./App.jsx";
import ChiSiamo from "./ChiSiamo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="chisiamo" element={<ChiSiamo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

const ribbon = document.createElement('a');
ribbon.target = '_blank';
ribbon.style = `position: fixed;
    display: block;
    font: bold 20px "Poppins", Arial, sans-serif;
    background: rgba(255, 255, 255, 0.8);
    color: #1e1935;
    text-decoration: none;
    padding: 5px;
    text-align: center;
    width: 300px;
    z-index: 100;
    border-top:5px solid rgb(237, 28, 36);
    border-bottom: 5px solid rgb(237, 28, 36);
    box-shadow: 0 3px 10px rgba(0,0,0,.25);
  left: -59px; top: 70px; transform: rotate(-45deg);`;
ribbon.href = 'https://keepitfree.ai/';
ribbon.innerText = 'Keep the Internet free';
document.body.appendChild(ribbon);
