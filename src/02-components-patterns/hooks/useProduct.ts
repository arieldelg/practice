import { useState } from "react";

const useProduct = (): {
  counter: number;
  handleCounter: (value: string) => void;
} => {
  const [counter, setCounter] = useState<number>(0);

  const handleCounter = (type: string) => {
    switch (type) {
      case "add":
        setCounter((prev) => prev + 1);
        break;
      case "minus":
        setCounter((prev) => Math.max(prev - 1, 0));
        break;
      default:
        break;
    }
  };

  return {
    handleCounter,
    counter,
  };
};

export default useProduct;
