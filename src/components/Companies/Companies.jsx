import "./companies.css";

export default function Companies() {
  return (
    <div className="companies-container">
      <div className="company-logo-containers">
        <img
          className="spacex-logo"
          src={process.env.PUBLIC_URL + "/images/spacex.png"}
          alt="Space X logo"
        />
      </div>
      <div className="company-logo-containers">
        <img
          className="boeing-logo"
          src={process.env.PUBLIC_URL + "/images/beoing.png"}
          alt="Beoing logo"
        />
      </div>
      <div className="company-logo-containers">
        <img
          className="nasa-logo"
          src={process.env.PUBLIC_URL + "/images/nasa.png"}
          alt="Nasa logo"
        />
      </div>
      <div className="company-logo-containers">
        <img
          className="astroscale-logo"
          src={process.env.PUBLIC_URL + "/images/astroscale.png"}
          alt="Astroscale.png"
        />
      </div>
    </div>
  );
}
