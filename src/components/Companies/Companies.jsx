import "./companies.css";

export default function Companies() {
  return (
    <div className="companies-container">
      <div className="company-logo-containers">
        <img
          className="spacex-logo"
          src="/images/spacex.png"
          alt="Space X logo"
        />
      </div>
      <div className="company-logo-containers">
        <img
          className="boeing-logo"
          src="/images/beoing.png"
          alt="Beoing logo"
        />
      </div>
      <div className="company-logo-containers">
        <img className="nasa-logo" src="/images/nasa.png" alt="Nasa logo" />
      </div>
      <div className="company-logo-containers">
        <img
          className="astroscale-logo"
          src="/images/astroscale.png"
          alt="Astroscale.png"
        />
      </div>
    </div>
  );
}
