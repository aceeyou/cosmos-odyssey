import "./footer.css";

export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer__logo-container">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          alt="Odyssey logo"
          className="logo"
        />
      </div>
      <nav className="footer__nav">
        <ul>
          <li>Stay Connected</li>
          <li>Education</li>
          <li>Community</li>
          <li>About Us</li>
        </ul>
      </nav>
      <div className="privacy-concerns">
        <ul>
          <li>Privacy policy</li>
          <li>Terms & Agreements</li>
        </ul>
      </div>
      <p className="footer__email">[contact@odyssey.com]</p>
    </div>
  );
}
