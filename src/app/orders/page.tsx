import { getOrders } from "@/actions/order";
import OrderAction from "@/components/order/OrderAction";
import { GetOrdersResponse } from "@/types/order";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { BsFillEyeFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const OrdersPage = async ({
  searchParams,
}: {
  searchParams: { page: number };
}) => {
  const ordersData: GetOrdersResponse = await getOrders(searchParams.page);

  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center">No</th>
            <th className="px-4 py-2 text-center">Date</th>
            <th className="px-4 py-2 text-center">Value</th>
            <th className="px-4 py-2 text-center">User</th>
            <th className="px-4 py-2 text-center">Email</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.data.map((order, i) => (
            <tr key={order.id}>
              <td className="border px-4 py-2 text-center">{i + 1}</td>
              <td className="border px-4 py-2 text-center">
                {formatDate(order.created_at)}
              </td>
              <td className="border px-4 py-2 text-center">{order.value}</td>
              <td className="border px-4 py-2 text-center">
                {order.user.first_name} {order.user.last_name}
              </td>
              <td className="border px-4 py-2 text-center">
                {order.user.email}
              </td>
              <td className="border px-4 py-2 text-center">
                <OrderAction id={order.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
