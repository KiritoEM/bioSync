import { useNav } from "@/hooks/useNav";
import { Fragment } from "react";

const Overlay = (): JSX.Element => {
  const { openOverlay } = useNav();
  return <Fragment>{openOverlay && <div className="overlay"></div>}</Fragment>;
};

export default Overlay;
