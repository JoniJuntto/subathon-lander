import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  unixTimestamp: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ unixTimestamp }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const remainingSeconds = Math.max(0, unixTimestamp - currentTime);

      if (remainingSeconds <= 0) {
        setTimeRemaining("00:00:00");
        return;
      }

      const days = Math.floor(remainingSeconds / (24 * 3600));
      const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      const formattedTime =
        days > 0
          ? `${days}d ${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          : `${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setTimeRemaining(formattedTime);
    };

    calculateTimeRemaining();

    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, [unixTimestamp]);

  return <div className="text-4xl font-bold">{timeRemaining}</div>;
};

export default CountdownTimer;
