import { IaboutCardData } from "@/utils/interfaces";

const AboutCard = ({ icon, subtitle, text }: IaboutCardData): JSX.Element => {
  return (
    <article className="about-card">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="content">
        <h5>{subtitle}</h5>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default AboutCard;
