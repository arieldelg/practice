export interface ProductCardProps {
  children?: React.ReactNode;
  products: Product;
}

export interface Product {
  img: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  handleCounter: (value: string) => void;
  products: Product;
}
