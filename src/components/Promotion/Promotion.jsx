import "./promotion.css";

export default function Promotion() {
  return (
    <section className="promotion-container">
      <h1>Join our vibrant community of space enthusiasts where you can</h1>
      <div className="articles-container">
        <Article
          icon="physics"
          title="Astronomy 101"
          content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
        />
        <Article
          icon="clipboard"
          title="Latest Discoveries"
          content="Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration."
        />
        <Article
          icon="telescope"
          title="Space Exploration"
          content="Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations."
        />
        <Article
          icon="chart-piece"
          title="Space Technology"
          content="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems."
        />
      </div>
    </section>
  );
}

function Article({ icon, title, content }) {
  return (
    <article className="promotion__article">
      <div className="icon-container astronomy-icon">
        <img
          src={`${process.env.PUBLIC_URL}/icons/${icon}.svg`}
          alt={`${title} icon`}
        />
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}
