import LandingCard from "@/components/cards/LandingCard";
import { aboutCardData } from "@/helpers/constants";
import { useTranslation } from "react-i18next";

const LandingAbout = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__about">
      <div className="about-header">
        <h2>{t("about_title")}</h2>
      </div>
      <div className="about-content">
        <div className="row gx-5 gy-5 gy-lg-2">
          {aboutCardData.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <LandingCard {...item} text_align="center" card_height="13rem" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
