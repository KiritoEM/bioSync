const LandingFeatures = (): JSX.Element => {
  return (
    <section id="landing-features">
      <div className="row">
        <div className="col-6">
          <div className="features-content">
            <div className="title">
              <h2>Discover our features</h2>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="features-image">
            <img src="/features_img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
