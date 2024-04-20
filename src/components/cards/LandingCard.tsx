import { ILandingCard } from "@/utils/interfaces";

const LandigCard = ({
  icon,
  subtitle,
  text,
  icon_width,
  subtitle_width,
  align,
  text_width,
  card_height,
}: ILandingCard): JSX.Element => {
  return (
    <article
      className="about-card"
      style={{
        alignItems: `${align}`,
        height: `${card_height ? card_height : "max-content"}`,
      }}
    >
      <div className="icon">
        <img src={icon} alt="" style={{ width: `${icon_width}` }} />
      </div>
      <div className="content">
        <h5 style={{ width: `${subtitle_width ? subtitle_width : "100%"}` }}>
          {subtitle}
        </h5>
        <p style={{ width: `${text ? text_width : "100%"}` }}>{text}</p>
      </div>
    </article>
  );
};

export default LandigCard;
