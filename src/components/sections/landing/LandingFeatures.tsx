import LandigCard from "@/components/cards/LandingCard";
import { featuresCardData } from "@/helpers/constants";
import { useTranslation } from "react-i18next";

const LandingFeatures = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing-features">
      <div className="row gy-5 gy-md-2">
        <div className="col-md-6">
          <div className="features-content">
            <div className="title">
              <h2>{t("features.title")}</h2>
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
        <div className="col-md-6">
          <div className="features-image">
            <img src="/features_img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
