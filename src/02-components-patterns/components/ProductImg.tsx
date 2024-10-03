import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

interface Props {
  img?: string;
  className?: string;
}

const ProductImg = ({ img = "", className }: Props) => {
  const { product } = useContext(ProductContext);
  let imgProduct;
  if (product.img) imgProduct = product.img;
  else if (img) imgProduct = img;
  else imgProduct = noImage;

  return (
    <div className={`${className}`}>
      <img
        src={imgProduct}
        alt="coffe mug"
        className={` object-cover w-full h-full rounded-t-md`}
      />
    </div>
  );
};

export { ProductImg };
