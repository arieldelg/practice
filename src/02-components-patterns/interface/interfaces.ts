export interface ProductCardProps {
  children?: React.ReactNode;
  product: ProductsInfo;
  className?: string;
  onChange?: (value: OnChangeProps) => void;
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
  handleCounter: (type: string) => void;
  product: ProductsInfo;
}
