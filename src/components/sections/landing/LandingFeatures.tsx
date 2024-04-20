import LandigCard from "@/components/cards/LandingCard";
import { featuresCardData } from "@/helpers/constants";

const LandingFeatures = (): JSX.Element => {
  return (
    <section className="landing-features">
      <div className="row">
        <div className="col-6">
          <div className="features-content">
            <div className="title">
              <h2>Discover our features</h2>
            </div>
            <div className="features-points">
              {featuresCardData.map((item, index) => (
                <LandigCard
                  key={index}
                  {...item}
                  icon_width="45px"
                  align="flex-start"
                  gap="12px"
                  text_width="380px"
                />
              ))}
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
