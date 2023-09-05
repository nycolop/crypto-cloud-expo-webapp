import { ICONS } from "../../assets/index.ts";
import "./styles.module.css";

export default function Header() {
  return (
    <header>
      <article id="logo-name">
        <img src={ICONS.LOGO} alt="" className="logo" />
        <h1 className="name-website">Crypto Cloud Expo</h1>
      </article>

      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Topics</a>
        <a href="#">Speakers</a>
        <a href="#">Sponsors</a>
      </nav>

      <button className="hamburger">
        <img src={ICONS.HAMBURGUER} alt="hamburguer button" />
      </button>
    </header>
  );
}
