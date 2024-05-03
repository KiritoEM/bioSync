import { useNav } from "@/hooks/useNav";
import { Fragment } from "react";

const Overlay = (): JSX.Element => {
  const { openOverlay } = useNav();
  return (
    <Fragment>
      {openOverlay && <div className="overlay d-lg-none"></div>}
    </Fragment>
  );
};

export default Overlay;
