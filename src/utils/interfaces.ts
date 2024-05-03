import { ReactNode } from "react";

interface Ititle {
  title: string;
}

interface InavList {
  sectionId?: string;
  key?: string;
}

interface Ichildren {
  children: ReactNode;
}

type TextAlign = "left" | "right" | "center" | "justify";

type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

interface ILandingCard {
  icon: string;
  subtitle: string;
  text: string;
  icon_width?: string;
  subtitle_width?: number;
  text_width?: string;
  card_height?: string;
  gap?: string;
  align?: AlignItems;
  text_align?: TextAlign;
}

interface ITranslationContext {
  optState: boolean;
  lang: Ilang;
  toogleOpt: () => void;
  closeOpt: () => void;
  selectLangue: (lang: Ilang) => void;
  changelangue: (lang: string) => void;
}

interface Ilang {
  lang: string;
  code: string;
}

interface IDefaultTranslationContext {
  openMenu: false;
  openOverlay: false;
  menuToogle: () => null;
}

interface IAuthProvider {
  children?: ReactNode;
}

interface INavContext {
  openMenu: boolean;
  openOverlay: boolean;
  menuToogle: () => void;
}

interface IDefaultNavContext {
  openMenu: false;
  openOverlay: false;
  menuToogle: () => null;
}

interface ITranslationProvider {
  children?: ReactNode;
}

export type {
  Ititle,
  InavList,
  Ichildren,
  ILandingCard,
  ITranslationContext,
  IDefaultNavContext,
  IDefaultTranslationContext,
  INavContext,
  IAuthProvider,
  ITranslationProvider,
  Ilang,
};
