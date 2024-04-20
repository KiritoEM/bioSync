import { ILandingCard } from "@/utils/interfaces";

const LandigCard = ({
  icon,
  subtitle,
  text,
  icon_height,
  icon_width,
}: ILandingCard): JSX.Element => {
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

export default LandigCard;
