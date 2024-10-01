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
        }}
      >
        {/* method 1 */}
        <ProductCard products={products}>
          <ProductCardNew.Image />
          <ProductCardNew.Title />
          <ProductCardNew.Buttons />
        </ProductCard>

        {/* method 2 */}
        <ProductCard products={products}>
          <ProductImg />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </section>
  );
};

export default ShoppingPage;
