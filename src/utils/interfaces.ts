import { ReactNode } from "react";

interface Ititle {
  title: string;
}

interface InavList {
  label: string;
  scrollSection?: string;
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

export type { Ititle, InavList, Ichildren, ILandingCard };
