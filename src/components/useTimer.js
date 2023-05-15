import { useEffect, useState } from "react";

export const useTimer = (state) => {
  const [numeral, setNumeral] = useState(state * 60);
  const [active, setActive] = useState(false);
  const Restart = () => {
    setNumeral(0);
  };
  const Start = () => {
    setActive(true);
    setNumeral(state * 60);
  };
  const Stop = () => {
    setActive(false);
  };

  useEffect(() => {
    if (!active) return;
    if (numeral <= 0) return;
    const id = setInterval(() => {
      setNumeral(numeral - 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [numeral, active]);

  return {
    Restart,
    Stop,
    Start,
    numeral,
  };
};
