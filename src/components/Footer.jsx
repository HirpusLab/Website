import "../styles/Footer.css";
import { useEffect } from "react";

export default function Footer({ onToggleIsDyslexic, onDyslexic, toPage }) {
  function handleKeyPress(e) {
    e.preventDefault();
    if (e.key === "Enter") {
      onToggleIsDyslexic();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, true);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <nav className="footer">
      <div className="footer-inner">
        <a className="footer-btn" onClick={onToggleIsDyslexic} role="button">
          {onDyslexic ? "Usa font normale" : "Usa font openDyslexic"}
        </a>
        <a className="footer-btn" href={toPage} role="button">
          Visita pagina retro (no js)
        </a>
      </div>
    </nav>
  );
}
