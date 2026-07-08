import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Hirpus Lab</h1>
        <p className="hero-subtitle">
          Hirpus è un collettivo informatico nato ad Avellino.
        </p>
        <p className="hero-subtitle">Ci occupiamo di:</p>
        <ul>
          <li>Privacy, security e anonimity;</li>
          <li>Educazione al software libero;</li>
          <li>Legacy computing/Permacomputing;</li>
          <li>Software alternativo e consapevole</li>
        </ul>
        <div className="link-container">
          <Button link="https://git.gay/Hirpus" label="git.gay">
            <img src="/icons/gay.svg" alt="git.gay" width="32" height="32" />
          </Button>
          <Button
            link="https://hirpusl.discourse.group/"
            label="Discourse forum"
          >
            <img
              src="/icons/discourse.svg"
              alt="Discourse forum"
              width="32"
              height="32"
            />
          </Button>
          <Button link="https://gravatar.com/hirpuslab" label="Gravatar">
            <img
              src="/icons/gravatar.svg"
              alt="Gravatar"
              width="32"
              height="32"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Button({ link, label, children }) {
  return (
    <a className="link-btn" href={link} target="_blank" aria-label={label}>
      {children}
    </a>
  );
}
