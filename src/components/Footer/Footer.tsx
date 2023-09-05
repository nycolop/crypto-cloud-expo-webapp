import "./styles.module.css";
import { ICONS } from "../../assets/index.ts";

export default function Footer() {
  return (
    <footer>
      <section>
        <img src={ICONS.LOGO} alt="logo" className="logo" />
        <h2 className="name-website">Crypto Cloud Expo</h2>
      </section>

      <small>Copyright © 2023 Crypto Cloud Expo. All Rights Reserved</small>
    </footer>
  );
}
