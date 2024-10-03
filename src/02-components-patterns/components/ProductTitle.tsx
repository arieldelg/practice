import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

const ProductTitle = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const { product } = useContext(ProductContext);
  let titleContext;

  if (product.title) titleContext = product.title;
  else titleContext = title;

  return (
    <span className={`${className} ${styles.productDescription}`}>
      {titleContext}
    </span>
  );
};

export { ProductTitle };
