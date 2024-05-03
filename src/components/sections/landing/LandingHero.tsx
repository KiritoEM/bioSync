import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import SplitType from "split-type";

const LandingHero = (): JSX.Element => {
  const { t } = useTranslation();
  const quoteRef = useRef<HTMLDivElement>(null);
  const [splitText, setSplitText] = useState<any>(null);
  const [splitTextTimeline, setSplitTextTimeline] = useState<any>(null);

  const initializeAnimation = () => {
    const splitTextInstance = new SplitType(quoteRef.current, {
      type: "words",
    });
    const timeline = gsap.timeline();
    gsap.set(quoteRef.current, { perspective: 400 });

    setSplitText(splitTextInstance);
    setSplitTextTimeline(timeline);
  };

  const kill = () => {
    if (splitTextTimeline) {
      splitTextTimeline.clear().time(0);
    }
    if (splitText) {
      splitText.revert();
    }
  };

  const handleCharsWordsLines = () => {
    kill();
    if (splitText) {
      splitText.split({ type: "chars, words, lines" });
      splitTextTimeline
        .from(
          splitText.chars,
          {
            duration: 0.2,
            autoAlpha: 0,
            scale: 4,
            force3D: true,
            stagger: 0.01,
          },
          0.5
        )
        .to(
          splitText.words,
          {
            duration: 0.1,
            color: "#121212",
            scale: 0.9,
            stagger: 0.1,
          },
          "words"
        )
        .to(
          splitText.words,
          {
            duration: 0.2,
            color: "#121212",
            scale: 1,
            stagger: 0.1,
          },
          "words+=0.1"
        )
        .to(
          splitText.words,
          {
            duration: 0.1,
            color: "#121212",
            scale: 1,
            stagger: 0.1,
          },
          "words+=0.2"
        )
        .to(splitText.lines, {
          duration: 0.5,
          x: 0,
        });
    }
  };

  useEffect(() => {
    initializeAnimation();
  }, []);

  useEffect(() => {
    handleCharsWordsLines();
  }, [splitText]);

  return (
    <section className="landing__hero">
      <div className="hero-container">
        <div className="title" ref={quoteRef}>
          <h1
            dangerouslySetInnerHTML={{
              __html: t("hero.title"),
            }}
          />
        </div>
        <p>{t("hero.text")}</p>
        <div className="buttons">
          <button className="btn">{t("hero.button1")}</button>
          <button className="btn">
            {t("hero.button2")} <img src="/arrow-right.png" alt="" />
          </button>
        </div>
      </div>
      <div className="footer-img">
        <img src="/hero-img.png" alt="" />
      </div>
    </section>
  );
};

export default LandingHero;
