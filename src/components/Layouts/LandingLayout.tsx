import { Ichildren } from "@/utils/interfaces";
import LandingNavbar from "../navbar/LandingNavbar";
import { NavProvider } from "@/hooks/useNav";
import { TranslationProvider } from "@/hooks/useTrans";

const LandingLayout = ({ children }: Ichildren): JSX.Element => {
  return (
    <TranslationProvider>
      <NavProvider>
        <LandingNavbar />
        {children}
      </NavProvider>
    </TranslationProvider>
  );
};

export default LandingLayout;
