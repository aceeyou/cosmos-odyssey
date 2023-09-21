import "./joinus.css";

export default function JoinUs() {
  return (
    <div className="join-us-container">
      <div className="img-container-jupiter">
        <img
          src={process.env.PUBLIC_URL + "/images/jupiter.jpg"}
          alt="jupiter banner"
        />
      </div>
      <div className="join-us-form">
        <h2>Join our community</h2>
        <p>
          of stargazers, explorers, and cosmic enthusiasts as we embark on a
          journey through the cosmos like never before.
        </p>
        <form className="subscribe-form">
          <label htmlFor="email-input" className="sr-only">
            Enter your email
          </label>
          <input
            type="email"
            name="email-input"
            id="email-input"
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
