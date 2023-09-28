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
  per_page: number;
  total: number;
};
