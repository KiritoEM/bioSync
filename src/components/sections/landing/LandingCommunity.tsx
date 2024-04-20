const LandingCommunity = (): JSX.Element => {
  return (
    <section className="landing__community">
      <div className="row">
        <div className="col-6">
          <div className="community-header">
            <h1>Join the community</h1>
          </div>
        </div>
        <div className="col-6">
          <div className="community-subscribe">
            <h5>Subscribe to the newsletter</h5>
            <div className="input"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCommunity;
