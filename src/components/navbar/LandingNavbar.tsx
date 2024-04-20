import { navList } from "@/helpers/constants";
import { Fragment } from "react";
import Logo from "../Logo";

const LandingNavbar = (): JSX.Element => {
  return (
    <Fragment>
      <nav className="landing-navbar">
        <div className="landing-navbar__container">
          <Logo />
          <div className="menu-items">
            <ul>
              {navList.map((route, index) => (
                <li key={index}>{route.label}</li>
              ))}
            </ul>
          </div>
          <div className="button">
            <button className="btn">Get started</button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default LandingNavbar;
