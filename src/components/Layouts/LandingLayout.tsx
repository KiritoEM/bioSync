import { Ichildren } from "@/utils/interfaces";
import { Fragment } from "react";
import LandingNavbar from "../navbar/LandingNavbar";

const LandingLayout = ({ children }: Ichildren): JSX.Element => {
  return (
    <Fragment>
      <LandingNavbar />
      {children}
    </Fragment>
  );
};

export default LandingLayout;
