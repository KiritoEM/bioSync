const LandingHero = (): JSX.Element => {
  return (
    <section className="landing__hero">
      <div className="hero-container">
        <h1>
          Join the Green <br /> Revolution with BioSync
        </h1>
        <p>
          Check if your product is ecologic and bio with our Artificial
          Intelligence, we facility your checking
        </p>
        <div className="buttons">
          <button className="btn">Get started</button>
          <button className="btn">
            Learn more <img src="/arrow-right.png" alt="" />
          </button>
        </div>
      </div>
      <div className="footer-img">
        <img src="/hero-img.png" alt="" />
      </div>
    </section>
  );
};

export default LandingHero;
