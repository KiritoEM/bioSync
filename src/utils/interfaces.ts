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

interface ILandingCard {
  icon: string;
  subtitle: string;
  text: string;
  icon_width?: string;
  subtitle_width?: number;
  text_width?: string;
  align?: TextAlign;
  card_height?: string;
  gap?: string;
}

export type { Ititle, InavList, Ichildren, ILandingCard };
