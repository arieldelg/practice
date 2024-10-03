import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

const ProductButtons = ({ className }: { className?: string }) => {
  const { handleCounter, counter } = useContext(ProductContext);
  return (
    <div className={`${className} ${styles.buttonsContainer} after:bg-red-400`}>
      <button
        className={`bg-red-300 ${styles.buttonMinus}`}
        onClick={() => handleCounter("minus")}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => handleCounter("add")}>
        +
      </button>
    </div>
  );
};

export { ProductButtons };
