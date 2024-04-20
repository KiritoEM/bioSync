import { navList } from "@/helpers/constants";
import { Fragment } from "react";
import Logo from "../Logo";
import LandingNavbarResponsive from "./LandingNavbarResponsive";

const LandingNavbar = (): JSX.Element => {
  return (
    <Fragment>
      <nav className="landing-navbar">
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
          <div className="menu-icon d-lg-none">
            <img src="/menu-icon.png" alt="" />
          </div>
        </div>
      </nav>
      {/* navbar responsive */}
      <LandingNavbarResponsive />
    </Fragment>
  );
};

export default LandingNavbar;
