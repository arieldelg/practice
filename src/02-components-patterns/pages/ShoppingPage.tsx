import ProductCard from "../components/ProductCard";

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
        <ProductCard />
      </div>
    </section>
  );
};

export default ShoppingPage;
