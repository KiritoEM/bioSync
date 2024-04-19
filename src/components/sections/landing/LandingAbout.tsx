import AboutCard from "@/components/cards/AboutCard";
import { aboutCardData } from "@/helpers/constants";

const LandingAbout = (): JSX.Element => {
  return (
    <section className="landing__about">
      <div className="about-header">
        <h2>How our app Work</h2>
      </div>
      <div className="about-content">
        <div className="row">
          {aboutCardData.map((item, index) => (
            <div className="col-4" key={index}>
              <AboutCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
