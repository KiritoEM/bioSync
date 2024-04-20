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

interface ILandingCard {
  icon: string;
  subtitle: string;
  text: string;
  icon_width?: number;
  subtitle_width?: number;
  text_width?: number;
  align?: any;
  card_height?: string;
  gap?: string;
}

export type { Ititle, InavList, Ichildren, ILandingCard };
