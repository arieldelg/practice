import { useEffect, useState } from "react";
import { HandlerCounterProps, UseProductProps } from "../interface/interfaces";

const useProduct = ({
  value = 0,
  initialValues,
}: UseProductProps): {
  counter: number;
  handleCounter: ({ type, value }: HandlerCounterProps) => void;
  maxCount: number;
  isMax: boolean;
  reset: () => void;
  isMin: boolean;
} => {
  const [counter, setCounter] = useState<number>(initialValues.count || value);

  const handleCounter = ({ type, value = 1 }: HandlerCounterProps) => {
    switch (type) {
      case "add":
        if (counter + value > initialValues.maxCount!)
          return setCounter(Math.min(counter + value, initialValues.maxCount!));

        setCounter(Math.max(counter + value, 0));
        if (counter + 1 < 0) return;
        break;
      case "minus":
        console.log(counter + value);
        setCounter(Math.max(counter - value, 0));
        if (counter - 1 < 0) return;
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setCounter(initialValues.count || value || 0);
  };

  useEffect(() => {
    setCounter(initialValues.count || value);
  }, [initialValues, value]);

  return {
    handleCounter,
    counter,
    maxCount: initialValues.maxCount!,
    isMax: counter === initialValues.maxCount ? true : false,
    isMin: counter === 0 ? true : false,
    reset,
  };
};

export default useProduct;
