import { IaboutCardData, InavList } from "@/utils/interfaces";

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

const aboutCardData: IaboutCardData[] = [
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

export { navList, aboutCardData };
