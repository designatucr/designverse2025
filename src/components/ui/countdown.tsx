"use client";
import { useState, useEffect } from "react";
import data from "@/data/config";

type CountdownClassNames = {
  unit: string;
  digit: string;
  background: string;
};
interface digitProps {
  value: number;
  unit: string;
  classNames: CountdownClassNames;
}

const Digits = ({ value, unit, classNames }: digitProps) => {
  return (
    <div className="flex flex-col items-center gap-4 last:hidden sm:last:flex">
      <div className="m-3 mb-0 flex gap-1 lg:!gap-1">
        {value
          .toString()
          .padStart(2, "0")
          .split("")
          .map((digit, index) => (
            <div
              className={`flex items-center justify-center rounded-lg ${classNames.background} bg-opacity-40 p-3 text-lg font-bold ${classNames.digit} lg:min-w-11 lg:p-3 lg:text-3xl`}
              key={index}
            >
              {digit}
            </div>
          ))}
      </div>
      <div className={`m-2 mt-0 text-xs ${classNames.unit}`}>{unit}</div>
    </div>
  );
};

interface clockProps {
  classNames: CountdownClassNames;
}

const Clock = ({ classNames }: clockProps) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = data.end.getTime() - new Date().getTime();
      if (timeLeft <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex font-bold">
      {Object.entries(countdown).map(([unit, value], index) => (
        <Digits key={index} unit={unit} value={value} classNames={classNames} />
      ))}
    </div>
  );
};

export default Clock;
