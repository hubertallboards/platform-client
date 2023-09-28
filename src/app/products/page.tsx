import { getCategories, getProducts } from "@/actions/product";
import ProductCard from "@/components/product/ProductCard";
import { Category, GetProductsResponse, Product } from "@/types/product";
import Link from "next/link";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page: number };
}) => {
  const productsData: GetProductsResponse = await getProducts(
    searchParams.page
  );
  const categories: Category[] = await getCategories();

  return (
    <div className="flex gap-4">
      <div className=" flex flex-col fixed top-1/5">
        <h3 className="font-semibold text-base mb-3">Category</h3>
        <Link className="text-sm mb-2 capitalize" href={"/products"}>
          All categories
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?page=1&category=${category.name}`}
            className="text-sm mb-2 capitalize"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="flex-1"></div>
      <div className="flex-4">
        {productsData.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
