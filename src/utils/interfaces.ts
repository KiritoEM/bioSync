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
  icon_height?: number;
  subtitle_width?: number;
  subtitle_height?: number;
}

export type { Ititle, InavList, Ichildren, ILandingCard };
