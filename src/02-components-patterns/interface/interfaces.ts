export interface ProductCardProps {
  children?: (props: ProductCardHandler) => React.ReactNode;
  product: ProductsInfo;
  className?: string;
  onChange?: (value: OnChangeProps) => void;
  value?: number;
  initialValues: InitialValuesProps;
}

interface InitialValuesProps {
  count?: number;
  maxCount?: number;
}

export interface OnChangeProps {
  product: ProductsInfo;
  count: number;
}

export interface ProductsInfo {
  img: string;
  title: string;
  id: string;
}

export interface ProductContextProps {
  counter: number;
  handleCounter: ({ type, value }: HandlerCounterProps) => void;
  product: ProductsInfo;
  maxCount: number;
}

export interface UseProductProps {
  onChange?: (value: OnChangeProps) => void;
  product: ProductsInfo;
  value?: number;
  initialValues: InitialValuesProps;
}

interface ProductCardHandler {
  counter: number;
  isMax: boolean;
  maxCount: number;
  product: ProductsInfo;
  handleCounter: (props: HandlerCounterProps) => void;
  reset: () => void;
  isMin: boolean;
}

export interface HandlerCounterProps {
  type: Operations;
  value?: number;
}

type Operations = "add" | "minus";
