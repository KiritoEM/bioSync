import { navList } from "@/helpers/constants";
import { useNav } from "@/hooks/useNav";

const LandingNavbarResponsive = (): JSX.Element => {
  const { openMenu } = useNav();

  return (
    <div
      className={`navbar-responsive d-lg-none ${
        openMenu ? "open-landing-nav" : "close-landing-nav"
      }`}
    >
      <ul>
        {navList.map((route, index) => (
          <li key={index}>{route.label}</li>
        ))}
        <li className="button">
          <button className="btn">Get started</button>
        </li>
      </ul>
    </div>
  );
};

export default LandingNavbarResponsive;
