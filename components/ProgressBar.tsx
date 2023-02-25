import React, { useEffect, useRef, useState } from "react";
import randomIntFromInterval from "utils/randomIntFromInterval";

interface Props {
  percentage: number;
}

const ProgressBar: React.FC<Props> = ({ percentage }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [progressBars, setProgressBars] = useState<Array<HTMLDivElement>>([]);

  useEffect(() => {
    const amountOfBars = Math.floor(percentage / 5);
    const newProgressBars: HTMLDivElement[] = [];
    for (let i = 0; i < amountOfBars; i++) {
      const progress = document.createElement("div");
      progress.classList.add("progress");
      if (i === 0) {
        progress.classList.add("progressRoundedBorders");
      }
      newProgressBars.push(progress);
    }
    setProgressBars(newProgressBars);
  }, [percentage]);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.innerHTML = "";
      progressBars.forEach((progress, index) => {
        const randInt = randomIntFromInterval(333, 3333);
        setTimeout(() => {
          if (progressRef.current) {
            progressRef.current.appendChild(progress);
            if (index === 0) {
              progress.classList.add("progressRoundedBorders");
            }
          }
        }, randInt);
      });
    }
  }, [progressBars]);

  const defaultProgressBars = [];
  for (let i = 0; i < 18; i++) {
    defaultProgressBars.push(<div className="progress" key={i} />);
  }

  return (
    <div className="progressBar" ref={progressRef} data-percentage={percentage}>
      {defaultProgressBars}
    </div>
  );
};

export default ProgressBar;
