import { ILandingCard, InavList } from "@/utils/interfaces";

const navList: InavList[] = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Features",
  },
];

const aboutCardData: ILandingCard[] = [
  {
    icon: "/about-icon1.png",
    subtitle: "Upload your product",
    text: "Add your product details and our ArtificiaI Intelligence will analyse it",
  },
  {
    icon: "/about-icon2.png",
    subtitle: "Checking if  bio",
    text: "Our Artificial Intelligence will anayse and check if your product is bio",
  },
  {
    icon: "/about-icon3.png",
    subtitle: "Recommandation",
    text: "Recommandation with Artificial Intelligence for product bio",
  },
];

const featuresCardData: ILandingCard[] = [
  {
    icon: "/send-icon.png",
    subtitle: "Artificial intelligence verificationion",
    text: "Add your product to our app and we will check if it is bio with our Artificial Intelligence",
  },
  {
    icon: "/discovery-icon.png",
    subtitle: "System recommandation",
    text: "Our Intelligence Artificial will recommand you product or components bio",
  },
];

export { navList, aboutCardData, featuresCardData };
