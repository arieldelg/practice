import { ProductButtons } from "./ProductButtons";
import ProductCardHOC from "./ProductCard";
import ProductCard from "./ProductCard";
import { ProductImg } from "./ProductImg";
import { ProductTitle } from "./ProductTitle";

export const ProductCardNew = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImg,
  Buttons: ProductButtons,
});

export default ProductCard;
export { ProductButtons, ProductCard, ProductImg, ProductTitle };
