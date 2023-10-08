export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: Category;
};

export type GetProductsResponse = {
  data: Product[];
  meta: {
    per_page: number;
    total: number;
  };
};

export type OrderedProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  category: Category;
  quantity: number;
};
