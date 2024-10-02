import {
  ProductButtons,
  ProductCard,
  ProductCardNew,
  ProductImg,
  ProductTitle,
} from "../components";

const products = {
  img: "./coffee-mug.png",
  title: "Coffe-Mug",
};

const ShoppingPage = () => {
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
        {/* method 1 */}
        <ProductCard
          products={products}
          className="ring-4 ring-red-300 bg-gray-500 w-full h-[19rem]"
        >
          <ProductCardNew.Image />
          <ProductCardNew.Title className="text-white" />
          <ProductCardNew.Buttons />
        </ProductCard>

        {/* method 2 */}
        <ProductCard
          products={products}
          className="bg-gray-700 ring-white ring-2 "
        >
          <ProductImg />
          <ProductTitle className="text-white" />
          <ProductButtons className="text-white " />
        </ProductCard>
      </div>
    </section>
  );
};

export default ShoppingPage;
