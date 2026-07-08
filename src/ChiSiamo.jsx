import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import { NavLink } from "react-router";
import persone from "./assets/persone.json";
import homeIcon from "./assets/home.svg";

function ChiSiamo() {
  return (
    <div className="app">
      <Navbar
        btn={
          <NavLink to="/">
            <img src={homeIcon} alt="" width="20" height="20" />
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
