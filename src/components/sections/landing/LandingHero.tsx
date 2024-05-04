import TextAnimation from "@/components/animations/TextAnimation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LandingHero = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const { divRef } = TextAnimation();

  useEffect(() => {}, [i18n.language]);

  return (
    <section className="landing__hero">
      <div className="hero-container">
        <div className="title" ref={divRef}>
          <h1 key={t("hero.title")}>{t("hero.title")}</h1>
        </div>
        <p>{t("hero.text")}</p>
        <div className="buttons">
          <button className="btn">{t("hero.button1")}</button>
          <button className="btn">
            {t("hero.button2")} <img src="/arrow-right.png" alt="" />
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
