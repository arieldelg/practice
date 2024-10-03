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
}: ProductCardProps) => {
  const { counter, handleCounter } = useProduct({ onChange, product, value });

  if (!className.includes("w-")) className = className + " w-64";
  if (!className.includes("rounded-")) className = className + " rounded-md";
  return (
    <Provider value={{ counter, handleCounter, product }}>
      <div className={`${className} ${styles.productCard}`}>{children}</div>
    </Provider>
  );
};

export default ProductCard;
