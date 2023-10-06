import { getOrder } from "@/actions/order";

const OrderPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const order = await getOrder(params.id);
  console.log(order);
  return <div>OrderPage</div>;
};

export default OrderPage;
