import { languagesData, navList } from "@/helpers/constants";
import { useNav } from "@/hooks/useNav";
import { useTrans } from "@/hooks/useTrans";
import scrollSection from "@/utils/scroll";
import { useTranslation } from "react-i18next";

const LandingNavbarResponsive = (): JSX.Element => {
  const { openMenu } = useNav();
  const { t } = useTranslation();
  const { optState, toogleOpt, lang, selectLangue, closeOpt, changelangue } =
    useTrans();

  return (
    <div
      className={`navbar-responsive d-lg-none ${
        openMenu ? "open-landing-nav" : "close-landing-nav"
      }`}
    >
      <ul>
        {navList.map((item, index) => (
          <li
            key={index}
            onClick={() => scrollSection(item.sectionId ? item.sectionId : "")}
          >
            {t(`${item.key}`)}
          </li>
        ))}

        {/* option pour la translation */}
        <li id="translation-option">
          <div className="item" onClick={() => toogleOpt()}>
            {lang.lang}
            <img src="/chevron-down.png" alt="" />
          </div>
          <div className={`window-toogle ${optState ? "d-flex" : "d-none"}`}>
            {languagesData.map((lang, index) => (
              <p
                onClick={() => {
                  selectLangue({ code: lang.code, lang: lang.lang });
                  changelangue(lang.code);
                  closeOpt();
                }}
                key={index}
              >
                {lang.lang}
              </p>
            ))}
          </div>
        </li>
        <li className="button">
          <button className="btn">Get started</button>
        </li>
      </ul>
    </div>
  );
};

export default LandingNavbarResponsive;
