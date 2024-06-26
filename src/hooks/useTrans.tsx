import {
  IDefaultTranslationContext,
  Ilang,
  ITranslationContext,
  ITranslationProvider,
} from "@/utils/interfaces";
import React, { ReactNode, createContext, useContext, useState } from "react";
import i18n from "i18next";

const TranslationContext = createContext<ITranslationContext | null>(null);

export const TranslationProvider: React.FC<ITranslationProvider> = ({
  children,
}): JSX.Element => {
  const [optState, setOptState] = useState<boolean>(false);
  const [lang, setLang] = useState<Ilang>({ code: "en", lang: "English" });

  //toogle function
  const toogleOpt = () => {
    setOptState(!optState);
  };

  const closeOpt = () => {
    setOptState(false);
  };

  const selectLangue = (lang: Ilang) => {
    setLang(lang);
  };

  const changelangue = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <TranslationContext.Provider
      value={{
        optState,
        toogleOpt,
        selectLangue,
        lang,
        closeOpt,
        changelangue,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

//hooks exportation
export const useTrans = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("hooks must be used within an Provider");
  }
  return context;
};
