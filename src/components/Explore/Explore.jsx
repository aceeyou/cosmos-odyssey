import "./explore.css";

export default function Explore() {
  return (
    <section className="explore-container">
      <div className="img-container-mars">
        <img src="images/mars.jpg" alt="mars" className="heading-bg-img mars" />
      </div>
      <div className="explore-content">
        <h1>
          We are committed to making space science accessible to all. Explore
          our educational resources, including
        </h1>

        <Article
          number="01"
          title="Online free courses and tutorials"
          content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
        />
        <Article
          number="02"
          title="Resources for teachers and educators"
          content="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats."
        />
        <Article
          number="03"
          title="Book recommendations and reviews"
          content="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
        />
      </div>
    </section>
  );
}

function Article({ number, title, content }) {
  return (
    <article className="explore__article">
      <p className="explore-card-number">{number}.</p>
      <h2>{title}</h2>
      <p className="explore__article-content">{content}</p>
    </article>
  );
}
