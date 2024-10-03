import { useEffect, useRef, useState } from "react";
import { OnChangeProps, ProductsInfo } from "../interface/interfaces";

interface Props {
  onChange?: (value: OnChangeProps) => void;
  product: ProductsInfo;
  value?: number;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
}: Props): {
  counter: number;
  handleCounter: (type: string) => void;
} => {
  const [counter, setCounter] = useState<number>(value);

  const onChangeRef = useRef(!!onChange);

  const handleCounter = (type: string) => {
    switch (type) {
      case "add":
        //! if onchange existe
        if (onChangeRef.current) return onChange!({ product, count: 1 });

        //* if onchange no existe
        setCounter(Math.max(counter + 1, 0));
        if (counter + 1 < 0) return;

        //? Eliminar condicional, ya que utilizo uno arriba
        if (onChange) onChange({ product, count: Math.max(counter + 1, 0) });
        break;
      case "minus":
        //! if onchange existe
        if (onChangeRef.current) return onChange!({ product, count: -1 });

        //* if onchange no existe
        setCounter(Math.max(counter - 1, 0));
        if (counter - 1 < 0) return;

        //? Eliminar condicional, ya que utilizo uno arriba
        if (onChange) onChange({ product, count: Math.max(counter - 1, 0) });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    handleCounter,
    counter,
  };
};

export default useProduct;
