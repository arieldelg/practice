import { useState } from "react";
import {
  ProductButtons,
  ProductCard,
  ProductImg,
  ProductTitle,
} from "../components";
import styles from "../styles/styles.module.css";
import { OnChangeProps, ProductsInfo } from "../interface/interfaces";

const products1: ProductsInfo = {
  img: "./coffee-mug.png",
  title: "Coffe-Mug",
  id: "1",
};

const products2: ProductsInfo = {
  img: "./coffee-mug2.png",
  title: "Coffe-Mug2",
  id: "2",
};

const products: ProductsInfo[] = [products1, products2];

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: OnChangeProps;
  }>({});

  const handleChange = (id: string, event: OnChangeProps) => {
    if (event.count === 0 && shoppingCart) {
      delete shoppingCart[id];
      return setShoppingCart((prev) => ({
        ...prev,
      }));
    }
    setShoppingCart((prev) => ({
      ...prev,
      [id]: event,
    }));
  };

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
