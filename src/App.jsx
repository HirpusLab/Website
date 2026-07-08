import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { NavLink } from "react-router";
import "./index.css";
import "./App.css";
import personIcon from "./assets/person.svg";

function App() {
  return (
    <div className="app">
      <Navbar
        btn={
          <NavLink to="/chisiamo">
            <img src={personIcon} alt="" width="20" height="20" />
          </NavLink>
        }
      />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
