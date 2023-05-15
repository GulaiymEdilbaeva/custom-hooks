import { useState } from "react";

function useCounter() {
  const { incrementLevel = 4, decrementLevel = 2 } = {};
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + incrementLevel);
  }
  function decrement() {
    setCount((prevCount) => {
      const newCount = prevCount - decrementLevel;
      return newCount >= 0 ? newCount : 0;
    });
  }

  function reset() {
    setCount((prevCount) => (prevCount = 0));
  }

  return { count, increment, decrement, reset };
}

export default useCounter;
