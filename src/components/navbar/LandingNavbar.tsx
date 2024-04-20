import { navList } from "@/helpers/constants";
import { Fragment } from "react";
import Logo from "../Logo";
import LandingNavbarResponsive from "./LandingNavbarResponsive";
import { useNav } from "@/hooks/useNav";
import Overlay from "./Overlay";

const LandingNavbar = (): JSX.Element => {
  const { menuToogle, openMenu } = useNav();
  return (
    <Fragment>
      <nav className={`landing-navbar ${openMenu && "open-nav-responsive"}`}>
        <div className="landing-navbar__container">
          <Logo />
          <div className="menu-items  d-none d-lg-flex">
            <ul>
              {navList.map((route, index) => (
                <li key={index}>{route.label}</li>
              ))}
            </ul>
          </div>
          <div className="button d-none d-lg-flex">
            <button className="btn">Get started</button>
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
