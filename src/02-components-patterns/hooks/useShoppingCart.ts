import { useState } from "react";
import { OnChangeProps } from "../interface/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: OnChangeProps;
  }>({});

  const handleChange = (id: string, event: OnChangeProps) => {
    // ! metodo sencillo
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

  return {
    //methods
    handleChange,

    //states
    shoppingCart,
  };
};

export default useShoppingCart;
