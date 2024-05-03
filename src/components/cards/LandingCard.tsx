import { ILandingCard } from "@/utils/interfaces";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
            textAlign: text_align ? text_align : "left",
            width: `${subtitle_width ? subtitle_width : "100%"}`,
          }}
        >
          {t(subtitle)}
        </h5>
        <p
          style={{
            textAlign: text_align ? text_align : "left",
            width: `${text_width ? text_width : "100%"}`,
          }}
        >
          {t(text)}
        </p>
      </div>
    </article>
  );
};

export default LandigCard;
