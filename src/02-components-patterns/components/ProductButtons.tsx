import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  className?: string;
  isMax: boolean;
}

const ProductButtons = ({ className, isMax }: Props) => {
  const { handleCounter, counter } = useContext(ProductContext);

  return (
    <div className={`${className}`}>
      <button
        className={`bg-red-300 ${styles.buttonMinus}`}
        onClick={() => handleCounter({ type: "minus" })}
      >
        -
      </button>
      <div
        className={`${styles.countLabel} ${
          isMax ? "border-r-[1px] border-black" : null
        }`}
      >
        {counter}
      </div>
      <button
        className={`${styles.buttonAdd} ${isMax ? "hidden" : ""}`}
        disabled={isMax}
        onClick={() => handleCounter({ type: "add" })}
      >
        +
      </button>
    </div>
  );
};

export { ProductButtons };
