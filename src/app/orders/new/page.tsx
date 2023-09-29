"use client";

import OrderedProductCard from "@/components/order/OrderedProductCard";
import { RootState } from "@/store";
import { OrderedProduct } from "@/types/product";
import { useSelector } from "react-redux";

const NewOrderPage = () => {
  const orderedProducts = useSelector(
    (state: RootState) => state.order.orderedProducts
  );
  const orderValue = useSelector((state: RootState) => state.order.value);
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-2">Your order {orderValue.toFixed(2)}$</h2>
        <button className="border border-solid border-blue-600 p-4">
          Checkout
        </button>
      </div>
      <div>
        {orderedProducts.map((product) => (
          <OrderedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewOrderPage;
