import {
  IDefaultTranslationContext,
  ITranslationContext,
} from "@/utils/interfaces";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface IAuthProvider {
  children?: ReactNode;
}

const TranslationContext = createContext<
  ITranslationContext | IDefaultTranslationContext | null
>(null);

export const TranslationProvider: React.FC<IAuthProvider> = ({
  children,
}): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openOverlay, setOpenOverlay] = useState<boolean>(false);

  //toogle function
  const menuToogle = () => {
    setOpenMenu(!openMenu);
    setOpenOverlay(!openOverlay);
  };

  return (
    <TranslationContext.Provider
      value={{
        openMenu,
        openOverlay,
        menuToogle,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

//hooks exportation
export const useTranslation = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("hooks must be used within an Provider");
  }
  return context;
};
