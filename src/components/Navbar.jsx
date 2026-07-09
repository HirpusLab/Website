import "../styles/Navbar.css";

export default function Navbar({ btn }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <img src="/favicon/favicon.svg" alt="logo"></img>
          </div>
        </a>

        <div className="navbar-actions">
          <div className="btn-wrapper">
            <button className="navbar-btn">{btn}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
