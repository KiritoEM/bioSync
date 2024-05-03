import { ILandingCard, InavList } from "@/utils/interfaces";

const navList: InavList[] = [
  {
    key: "nav.Home",
  },
  {
    key: "nav.About",
  },
  {
    key: "nav.Features",
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
    subtitle: "Artificial intelligence verification",
    text: "Add your product to our app and we will check if it is bio with our Artificial Intelligence",
  },
  {
    icon: "/discovery-icon.png",
    subtitle: "System recommandation",
    text: "Our Intelligence Artificial will recommand you product or components bio",
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
