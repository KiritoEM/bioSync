import { ILandingCard, InavList } from "@/utils/interfaces";

const navList: InavList[] = [
  {
    key: "nav.Home",
    sectionId: "home",
  },
  {
    key: "nav.About",
    sectionId: "about",
  },
  {
    key: "nav.Features",
    sectionId: "features",
  },
];

const aboutCardData: ILandingCard[] = [
  {
    icon: "/about-icon1.png",
    subtitle: "about.upload.subtitle",
    text: "about.upload.text",
  },
  {
    icon: "/about-icon2.png",
    subtitle: "about.checking.subtitle",
    text: "about.checking.text",
  },
  {
    icon: "/about-icon3.png",
    subtitle: "about.recommandation.subtitle",
    text: "about.recommandation.text",
  },
];

const featuresCardData: ILandingCard[] = [
  {
    icon: "/send-icon.png",
    subtitle: "features.verification.subtitle",
    text: "features.verification.text",
  },
  {
    icon: "/discovery-icon.png",
    subtitle: "features.recommandation.subtitle",
    text: "features.recommandation.text",
  },
];

const languagesData = [
  {
    code: "en",
    lang: "English",
  },
  {
    code: "fr",
    lang: "Francais",
  },
];

export { navList, aboutCardData, featuresCardData, languagesData };
