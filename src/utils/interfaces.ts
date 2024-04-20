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
  icon_width?: string;
  subtitle_width?: number;
  text_width?: string;
  align?: any;
  card_height?: string;
  gap?: string;
}

export type { Ititle, InavList, Ichildren, ILandingCard };
