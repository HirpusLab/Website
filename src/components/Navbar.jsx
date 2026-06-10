import { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const ThemeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export default function Navbar({ theme, setTheme }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <img src="/hirpus.jpeg" alt="logo "></img>
          </div>
          <span className="logo-text">HirpusLab</span>
        </a>

        <div className="navbar-actions">
          <div className="theme-wrapper" ref={dropdownRef}>
            <button
              className="theme-btn"
              onClick={() => setDropdownOpen((o) => !o)}
              aria-label="Toggle theme"
            >
              <ThemeIcon />
            </button>
            {dropdownOpen && (
              <div className="theme-dropdown">
                {["System", "Light", "Dark"].map((t) => (
                  <button
                    key={t}
                    className={`theme-option ${theme === t.toLowerCase() ? "active" : ""}`}
                    onClick={() => {
                      setTheme(t.toLowerCase());
                      setDropdownOpen(false);
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
