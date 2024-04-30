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
  gap,
  text_align,
}: ILandingCard): JSX.Element => {
  return (
    <article
      className="landing-card"
      style={{
        alignItems: `${align}`,
        height: `${card_height ? card_height : "max-content"}`,
        gap: `${gap}`,
      }}
    >
      <div className="icon">
        <img src={icon} alt="" style={{ width: `${icon_width}` }} />
      </div>
      <div className="content">
        <h5
          style={{
            width: `${subtitle_width ? subtitle_width : "100%"}`,
            textAlign: text_align ? text_align : "left",
          }}
        >
          {subtitle}
        </h5>
        <p
          style={{
            width: `${text_width ? text_width : "100%"}`,
            textAlign: text_align ? text_align : "left",
          }}
        >
          {text}
        </p>
      </div>
    </article>
  );
};

export default LandigCard;
