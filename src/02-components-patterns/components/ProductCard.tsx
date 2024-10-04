import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../interface/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({
  children,
  product,
  className = "w-64",
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, handleCounter, maxCount, isMax, reset, isMin } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  if (!className.includes("w-")) className = className + " w-64";
  if (!className.includes("rounded-")) className = className + " rounded-md";
  return (
    <Provider value={{ counter, handleCounter, product, maxCount }}>
      <div className={`${className} ${styles.productCard}`}>
        {children!({
          counter,
          handleCounter,
          maxCount,
          product,
          isMax,
          reset,
          isMin,
        })}
      </div>
    </Provider>
  );
};

export default ProductCard;
