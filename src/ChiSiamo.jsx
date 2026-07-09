import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/index.css";
import "./styles/App.css";
import { NavLink } from "react-router";
import useDyslexicFont from "./hooks/useDyslexicFont";
import persone from "./assets/persone.json";
import homeIcon from "./assets/home.svg";

function ChiSiamo() {
  const [isDyslexic, toggleDyslexic] = useDyslexicFont();

  return (
    <div className={`app ${isDyslexic ? "dyslexic" : ""}`}>
      <Navbar
        btn={
          <NavLink to="/">
            <img src={homeIcon} alt="" width="32" height="32" />
          </NavLink>
        }
      />
      <main>
        <ul className="card-box">
          {persone.map((p) => (
            <Card pfp={p.pfp} name={p.name} key={p.name}>
              {p.text}
            </Card>
          ))}
        </ul>
      </main>
      <Footer
        onToggleIsDyslexic={toggleDyslexic}
        onDyslexic={isDyslexic}
        toPage="/chisiamonojs.html"
      />
    </div>
  );
}

function Card({ name, pfp, children, alignRight }) {
  return (
    <li className="card">
      {alignRight || (
        <div className="card-person">
          <img src={pfp} />
          <h2>{name}</h2>
        </div>
      )}

      <p>{children}</p>

      {alignRight && (
        <div className="card-person">
          <img src={pfp} />
          <h2>{name}</h2>
        </div>
      )}
    </li>
  );
}

export default ChiSiamo;
