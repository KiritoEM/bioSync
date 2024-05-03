import { useTranslation } from "react-i18next";

const LandingHero = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="landing__hero">
      <div className="hero-container">
        <h1
          dangerouslySetInnerHTML={{
            __html: t("hero.title"),
          }}
        />
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
