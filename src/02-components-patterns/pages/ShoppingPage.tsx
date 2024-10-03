import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components";
import styles from "../styles/styles.module.css";
import { products } from "../data/data";
import useShoppingCart from "../hooks/useShoppingCart";

const ShoppingPage = () => {
  const { handleChange, shoppingCart } = useShoppingCart();
  return (
    <section>
      <h1>Shopping Page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-gray-700 ring-white ring-2 h-[22rem] flex flex-col justify-between"
            onChange={(event) => handleChange(product.id, event)}
            value={shoppingCart[product.id]?.count}
          >
            <ProductImg className="h-3/4 w-full" />
            <ProductTitle className="text-white" />
            <ProductButtons className="text-white flex flex-row pb-2 px-2" />
          </ProductCard>
        ))}
      </div>

      <div className="absolute top-8 right-4 flex flex-col items-center gap-2">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product.product}
            className="bg-gray-700 w-24 h-32 flex flex-col justify-between ring-2 ring-white"
            onChange={(event) => handleChange(product.product.id, event)}
            value={product.count}
          >
            <ProductImg className={`w-full h-2/4 ${styles.image}`} />
            <ProductButtons className="text-white flex flex-row justify-center w-full h-auto pb-2" />
          </ProductCard>
        ))}
      </div>
    </section>
  );
};

export default ShoppingPage;
