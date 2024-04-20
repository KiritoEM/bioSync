import { Ichildren } from "@/utils/interfaces";
import { Fragment } from "react";
import LandingNavbar from "../navbar/LandingNavbar";
import { NavProvider } from "@/hooks/useNav";

const LandingLayout = ({ children }: Ichildren): JSX.Element => {
  return (
    <Fragment>
      <NavProvider>
        <LandingNavbar />
        {children}
      </NavProvider>
    </Fragment>
  );
};

export default LandingLayout;
