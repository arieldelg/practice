import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

const ProductTitle = ({ title }: { title?: string }) => {
  const { products } = useContext(ProductContext);
  let titleContext;

  if (products.title) titleContext = products.title;
  else titleContext = title;

  return <span className={styles.productDescription}>{titleContext}</span>;
};

export { ProductTitle };
