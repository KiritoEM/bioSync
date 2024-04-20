import { navList } from "@/helpers/constants";

const LandingNavbarResponsive = (): JSX.Element => {
  return (
    <div className="navbar-responsive d-lg-none">
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
