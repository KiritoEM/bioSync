import { useTranslation } from "react-i18next";

const LandingCommunity = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <section className="landing__community">
      <div className="row gy-4">
        <div className="col-md-6 col-lg-7">
          <div className="community-header">
            <h1>{t("community.title")}</h1>
          </div>
        </div>
        <div className="col-md-6 col-lg-5">
          <div className="community-subscribe">
            <h5>{t("community.suscribe")}</h5>
            <div className="input">
              <input type="text" placeholder={t("community.placeholder")} />
              <button className="btn">
                subscribe <img src="/arrow-right2.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCommunity;
