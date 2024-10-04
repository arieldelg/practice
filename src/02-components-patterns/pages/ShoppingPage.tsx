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
        className="bg-gray-700 ring-white ring-2 h-auto flex flex-col justify-between"
        initialValues={{
          count: 3,
          maxCount: 15,
        }}
      >
        {({ isMax, reset, counter, handleCounter, isMin }) => (
          <>
            <ProductImg className="h-3/4 w-full" />
            <ProductTitle className="text-white" />
            <ProductButtons
              className="text-white flex flex-row pb-2 px-2 w-auto"
              isMax={isMax}
            />
            <button onClick={() => reset()} className="bg-white text-black">
              Reset Value
            </button>
            <div className="flex flex-row justify-center items-center ring-2 ring-white rounded-md w-fit m-auto my-4">
              <button
                onClick={() => handleCounter({ type: "minus", value: 2 })}
                disabled={isMin}
                className="button_span rounded-l-md border-r-2"
              >
                -2
              </button>
              <span className="button_span">{counter}</span>
              <button
                className="button_span rounded-r-md border-l-2"
                disabled={isMax}
                onClick={() => handleCounter({ type: "add", value: 2 })}
              >
                +2
              </button>
            </div>
          </>
        )}
      </ProductCard>
    </section>
  );
};

export default ShoppingPage;
