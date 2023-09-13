import "./hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="img-container">
        <img
          className="hero-img-earth"
          src="images/earth.jpg"
          alt="hero banner earth"
        />
      </div>
      <h2 className="hero__headline">Unveiling the Wonders of the Universe</h2>
      <div className="hero__astronaut-container">
        <img
          src="images/astronaut.png"
          alt="astronaut hero"
          className="astronaut-img"
        />
        <div className="hero__astronaut-shadow"></div>
        <div className="total-time-in-space-container">
          <div className="hero__astronaut-boxes-top top">
            <div className="icon-container time-icon">
              <img src="icons/stopwatch.svg" alt="stopwatch icon" />
            </div>
            <p>Total time in space</p>
          </div>
          <div className="hero__astronaut-boxes-bottom bottom">
            <p className="time-in-space-text">352 D 5H 49 M 20 S</p>
          </div>
        </div>
        {/* SPACEWALKS */}
        <div className="spacewalks-container">
          <div className="hero__astronaut-boxes-top top">
            <div className="icon-container spacewalks-icon">
              <img src="icons/chart-pie.svg" alt="spacewalks icon" />
            </div>
            <p>Spacewalks</p>
          </div>
          <div className="hero__astronaut-boxes-bottom bottom">
            <img src="images/line-graph.png" alt="spacewalks line graph" />
            <img src="images/pie.png" alt="spacewalks pie graph" />
          </div>
        </div>
        {/* EXERCISING */}
        <div className="exercising-container">
          <div className="hero__astronaut-boxes-top top">
            <div className="icon-container exercising-icon">
              <img src="icons/heart.svg" alt="exercising icon" />
            </div>
            <p>Exercising</p>
          </div>
          <div className="hero__astronaut-boxes-bottom bottom">
            <img src="images/pulse.png" alt="spacewalks line graph" />
          </div>
        </div>
      </div>
      {/* HERO DESCRIPTION */}
      <section className="hero__description">
        <article>
          <h1 className="sr-only">ODYSSEY</h1>
          <h3 className="sub-heading">
            At odissey, our mission is to inspire, educate, and ignite your
            passion for the cosmos. We are your premier destination for all
            things related to space exploration, astronomy, and the mysteries of
            the universe. Whether you're a seasoned astronomer or a curious
            novice, join us on a journey to the furthest reaches of the cosmos.{" "}
          </h3>
          <div className="hero__desctiption-buttons">
            <button className="get-started">Get Started</button>
            <div className="watch-video-container">
              <p>Watch Video</p>
              <div className="icon-container watch-video-btn watch-video-icon">
                <img src="icons/play.svg" alt="watch video icon" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
