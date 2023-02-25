import { useState } from "react";
import Link from "next/link";

const AnimatedNewTabLink = ({ href, text }: { href: string; text: string }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animationTimeoutId, setAnimationTimeoutId] = useState<number>();
  const [displayText, setDisplayText] = useState(text);

  const animate = (iteration: number) => {
    setDisplayText((prevText) => {
      return prevText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    });

    if (iteration < text.length) {
      setAnimationTimeoutId(
        window.setTimeout(() => animate(iteration + 1 / 4), 30)
      );
    }
  };

  const handleMouseEnter = () => {
    if (animationTimeoutId) {
      window.clearTimeout(animationTimeoutId);
    }
    animate(0);
  };

  const handleMouseLeave = () => {
    if (animationTimeoutId) {
      window.clearTimeout(animationTimeoutId);
    }
    setDisplayText(text);
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <span
        className="p-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {displayText}
      </span>
    </Link>
  );
};

export default AnimatedNewTabLink;
