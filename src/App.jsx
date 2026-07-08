import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { NavLink } from "react-router";
import useDyslexicFont from "./hooks/useDyslexicFont";
import "./styles/index.css";
import "./styles/App.css";
import personIcon from "./assets/person.svg";

function App() {
  const [isDyslexic, toggleDyslexic] = useDyslexicFont();

  return (
    <div className={`app ${isDyslexic ? "dyslexic" : ""}`}>
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
      <Footer
        onToggleIsDyslexic={toggleDyslexic}
        onDyslexic={isDyslexic}
        toPage="/nojs.html"
      />
    </div>
  );
}

export default App;
