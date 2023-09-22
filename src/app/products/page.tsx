import { getProducts } from "@/actions/product";

const ProductsPage = async () => {
  const products = await getProducts();
  console.log(products);
  return <div>ProductsPage</div>;
};

export default ProductsPage;
