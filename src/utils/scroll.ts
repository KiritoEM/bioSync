const scollSection = (id: string) => {
  const scrollToSection = () => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
};

export default scollSection;
