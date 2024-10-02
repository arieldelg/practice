import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  img?: string;
  className?: string;
}

const ProductImg = ({ img = "", className }: Props) => {
  const { products } = useContext(ProductContext);
  let imgProduct;
  if (products.img) imgProduct = products.img;
  else if (img) imgProduct = img;
  else imgProduct = noImage;

  return (
    <img
      src={imgProduct}
      alt="coffe mug"
      className={`${className} ${styles.productImg}`}
    />
  );
};

export { ProductImg };
