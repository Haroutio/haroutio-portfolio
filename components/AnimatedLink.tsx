import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type AnimatedLinkProps = {
  href: string;
  text: string;
  handleLinkClick?: (pathname: string) => void;
};

const AnimatedLink = ({ href, text, handleLinkClick }: AnimatedLinkProps) => {
  const router = useRouter();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animationTimeoutId, setAnimationTimeoutId] = useState<number>();
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    return () => {
      if (animationTimeoutId) {
        window.clearTimeout(animationTimeoutId);
      }
    };
  }, [animationTimeoutId]);

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
      const timeoutId = window.setTimeout(() => animate(iteration + 1 / 4), 30);
      setAnimationTimeoutId(timeoutId);
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

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (handleLinkClick) {
      handleLinkClick(href);
      router.push(href, undefined, { shallow: true });
    }
  };

  return (
    <span
      className="p-1 haxor-link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {displayText}
    </span>
  );
};

export default AnimatedLink;
