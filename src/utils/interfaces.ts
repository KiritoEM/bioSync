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

interface IaboutCardData {
  icon: string;
  subtitle: string;
  text: string;
}

export type { Ititle, InavList, Ichildren, IaboutCardData };
