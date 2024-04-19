import { ReactNode } from "react";

interface Ititle {
  title: string;
}

interface InavList {
  label: string;
  scrollSection?: string;
}

interface Ichildren{
    children : ReactNode
}

export type { Ititle, InavList, Ichildren };
