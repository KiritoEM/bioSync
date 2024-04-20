const LandingCommunity = (): JSX.Element => {
  return (
    <section className="landing__community">
      <div className="row gy-4">
        <div className="col-md-6 col-lg-7">
          <div className="community-header">
            <h1>Join the community</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-5">
          <div className="community-subscribe">
            <h5>Subscribe to the newsletter</h5>
            <div className="input">
              <input type="text" placeholder="Enter your email" />
              <button className="btn">
                Subscribe <img src="/arrow-right2.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCommunity;
