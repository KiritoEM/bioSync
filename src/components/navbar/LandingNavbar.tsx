import { languagesData, navList } from "@/helpers/constants";
import { Fragment } from "react";
import Logo from "../Logo";
import LandingNavbarResponsive from "./LandingNavbarResponsive";
import { useNav } from "@/hooks/useNav";
import Overlay from "./Overlay";
import { useTrans } from "@/hooks/useTrans";
import { useTranslation } from "react-i18next";
import scrollSection from "@/utils/scroll";

const LandingNavbar = (): JSX.Element => {
  const { menuToogle, openMenu } = useNav();
  const { optState, toogleOpt, lang, selectLangue, closeOpt, changelangue } =
    useTrans();
  const { t } = useTranslation();

  return (
    <Fragment>
      <nav className={`landing-navbar ${openMenu && "open-nav-responsive"}`}>
        <div className="landing-navbar__container">
          <Logo />
          <div className="menu-items  d-none d-lg-flex">
            <ul>
              {navList.map((item, index) => (
                <li
                  key={index}
                  onClick={() =>
                    scrollSection(item.sectionId ? item.sectionId : "")
                  }
                >
                  {t(`${item.key}`)}
                </li>
              ))}
              <li id="translation-option">
                <div className="item" onClick={() => toogleOpt()}>
                  {lang.lang}
                  <img src="/chevron-down.png" alt="" />
                </div>
                <div
                  className={`window-toogle ${optState ? "d-flex" : "d-none"}`}
                >
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
            </ul>
          </div>
          <div className="button d-none d-lg-flex">
            <button className="btn">{t("nav.button")}</button>
          </div>

          {/* menu-icon */}
          <div className="menu-icon d-lg-none" onClick={() => menuToogle()}>
            <img src="/menu-icon.png" alt="" />
          </div>
        </div>
      </nav>
      {/* navbar responsive */}
      <LandingNavbarResponsive />

      {/* overlay */}
      <Overlay />
    </Fragment>
  );
};

export default LandingNavbar;
