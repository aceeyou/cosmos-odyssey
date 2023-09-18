import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src={process.env.PUBLIC_URL + "/images/earth.jpg"}
        alt="earth"
        className="hero-earth"
      />
      <div className="hero-headline">
        <h1>Unveiling the Wonders of the Universe</h1>
      </div>
      <Astronaut />
      <div className="hero-description">
        <p>
          At odissey, our mission is to inspire, educate, and ignite your
          passion for the cosmos. We are your premier destination for all things
          related to space exploration, astronomy, and the mysteries of the
          universe. Whether you're a seasoned astronomer or a curious novice,
          join us on a journey to the furthest reaches of the cosmos.{" "}
        </p>
        <div className="buttons">
          <div className="hero-get-started">Get Started</div>
          <div>
            <p>Watch Video</p>
            <div className="icon-container play-icon-container">
              <img
                src={process.env.PUBLIC_URL + "/icons/play.svg"}
                alt="play video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Astronaut() {
  return (
    <div className="astronaut-group">
      <img
        src={process.env.PUBLIC_URL + "/images/astronaut.png"}
        alt="astronaut"
        className="astronaut-hero-img"
      />
      {/* time in space */}
      <div className="time-in-space-box">
        <div className="top">
          <div className="icon-container time-icon-container">
            <img
              src={process.env.PUBLIC_URL + "/icons/stopwatch.svg"}
              alt="stopwatch"
            />
          </div>
          <p>Total time in space</p>
        </div>
        <div className="bottom">
          <p>352 D 5 H 49 M 20 S</p>
        </div>
      </div>
      {/* spacewalks */}
      <div className="box spacewalks-box">
        <div className="top">
          <div className="icon-container icon-spacewalks">
            <img src={process.env.PUBLIC_URL + "/icons/chart-pie.svg"} alt="" />
          </div>
          <p>Spacewalks</p>
        </div>
        <div className="bottom">
          <img
            src={process.env.PUBLIC_URL + "/images/line-graph.png"}
            alt="line graph"
          />
          <img src={process.env.PUBLIC_URL + "/images/pie.png"} alt="pie" />
        </div>
      </div>
      {/* exercising */}
      <div className="box exercising-box">
        <div className="top">
          <div className="icon-container icon-spacewalks">
            <img src={process.env.PUBLIC_URL + "/icons/heart.svg"} alt="" />
          </div>
          <p>Exercising</p>
        </div>
        <div className="bottom">
          <img
            src={process.env.PUBLIC_URL + "/images/pulse.png"}
            alt="line graph"
          />
        </div>
      </div>
    </div>
  );
}
