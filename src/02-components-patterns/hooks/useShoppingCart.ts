import { useState } from "react";
import { OnChangeProps } from "../interface/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: OnChangeProps;
  }>({});

  const handleChange = (id: string, event: OnChangeProps) => {
    switch (event.count) {
      case -1:
        if (shoppingCart[id]?.count === undefined) return;
        if (shoppingCart[id]?.count - 1 === 0) {
          delete shoppingCart[id];
          return setShoppingCart((prev) => ({
            ...prev,
          }));
        }
        setShoppingCart((prev) => ({
          ...prev,
          [id]: {
            product: event.product,
            count: Math.max(shoppingCart[id]?.count - 1, 0) || 0,
          },
        }));
        break;

      case 1:
        setShoppingCart((prev) => ({
          ...prev,
          [id]: {
            product: event.product,
            count: shoppingCart[id]?.count + 1 || 1,
          },
        }));
        break;

      default:
        console.error("no match founded");
        break;
    }

    // ! metodo sencillo
    // if (event.count === 0 && shoppingCart) {
    //   delete shoppingCart[id];
    //   return setShoppingCart((prev) => ({
    //     ...prev,
    //   }));
    // }
    // setShoppingCart((prev) => ({
    //   ...prev,
    //   [id]: event,
    // }));
  };

  return {
    //methods
    handleChange,

    //states
    shoppingCart,
  };
};

export default useShoppingCart;
