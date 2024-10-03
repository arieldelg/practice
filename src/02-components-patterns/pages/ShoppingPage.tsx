import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components";
import { products } from "../data/data";

const product = products[0];

const ShoppingPage = () => {
  return (
    <section>
      <h1>Shopping Page</h1>

      <ProductCard
        product={product}
        className="bg-gray-700 ring-white ring-2 h-[22rem] flex flex-col justify-between"
      >
        <ProductImg className="h-3/4 w-full" />
        <ProductTitle className="text-white" />
        <ProductButtons className="text-white flex flex-row pb-2 px-2" />
      </ProductCard>
    </section>
  );
};

export default ShoppingPage;
