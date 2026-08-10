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
        <p className="license-notice">
          <a href="https://hirpus.vercel.app/">Hirpus Website</a> © 2026 by{" "}
          <a href="https://gravatar.com/hirpuslab">Hirpus Lab</a> is licensed
          under{" "}
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY-NC-SA 4.0
          </a>
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
            alt=""
            style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
            alt=""
            style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
            alt=""
            style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
          />
          <img
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
            alt=""
            style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
          />
        </p>
        <a className="footer-btn" href={toPage} role="button">
          Visita pagina retro (no js)
        </a>
      </div>
    </nav>
  );
}
