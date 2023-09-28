import { getProduct } from "@/actions/product";
import { Product } from "@/types/product";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product: Product = await getProduct(params.id);

  return <div>ProductPage</div>;
};

export default ProductPage;
