import "./styles.module.css";

export default function Aside() {
  return (
    <aside>
      <div className="aside-overlay"></div>
      <h2>contact us</h2>
      <div className="map"></div>
      <p>Dubai, ATLANTIS, THE PALM</p>

      <article className="contact">
        <a href="#">
          <img
            src="./asset/icons/843786_whatsapp_icon.svg"
            alt=""
            className="contact-icons"
          />
        </a>
        <a href="#">
          <img
            src="./asset/icons/8547122_telegram_plane_icon (1).svg"
            alt=""
            className="contact-icons"
          />
        </a>
        <a href="#">
          <img
            src="./asset/icons/8665305_envelope_email_icon.svg"
            alt=""
            className="contact-icons"
          />
        </a>
      </article>
    </aside>
  );
}
