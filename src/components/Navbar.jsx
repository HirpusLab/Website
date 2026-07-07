import "./Navbar.css";

export default function Navbar({ btn }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <img src="/hirpus.jpeg" alt="logo"></img>
          </div>
        </a>

        <div className="navbar-actions">
          <div className="theme-wrapper">
            <button className="theme-btn">{btn}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
