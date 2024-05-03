import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

const TextAnimation = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [splitText, setSplitText] = useState<SplitType | null>(null);
  const [splitTextTimeline, setSplitTextTimeline] =
    useState<gsap.core.Timeline | null>(null);

  const initializeAnimation = () => {
    if (divRef.current) {
      // @ts-ignore
      const splitTextInstance = new SplitType(divRef.current, {
        // @ts-ignore
        type: "words",
      });
      const timeline = gsap.timeline();
      gsap.set(divRef.current, { perspective: 400 });

      setSplitText(splitTextInstance);
      setSplitTextTimeline(timeline);
    }
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
      splitText.split({
        // @ts-ignore
        type: "chars, words, lines",
      });
      if (splitTextTimeline) {
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
    }
  };

  useEffect(() => {
    initializeAnimation();
    return () => {
      kill();
    };
  }, []);

  useEffect(() => {
    handleCharsWordsLines();
  }, [splitText]);

  return { divRef };
};

export default TextAnimation;
