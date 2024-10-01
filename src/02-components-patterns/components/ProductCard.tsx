import styles from "../styles/styles.module.css";
import useProduct from "../hooks/useProduct";
import { createContext } from "react";
import { ProductCardProps, ProductContextProps } from "../interface/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, products }: ProductCardProps) => {
  const { counter, handleCounter } = useProduct();

  return (
    <Provider value={{ counter, handleCounter, products }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export default ProductCard;
