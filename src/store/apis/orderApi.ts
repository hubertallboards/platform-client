import {
  AddOrderValues,
  DeleteOrderResponse,
  GetOrdersResponse,
  Order,
} from "@/types/order";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  }),
  tagTypes: ["Order"],
  endpoints(builder) {
    return {
      addOrder: builder.mutation<Order, AddOrderValues>({
        query: (addOrderValues) => ({
          url: "/orders",
          method: "POST",
          body: addOrderValues,
          credentials: "include",
        }),
      }),
      deleteOrder: builder.mutation<DeleteOrderResponse, string>({
        query: (id) => ({
          url: `/orders/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Order"],
      }),
    };
  },
});

export const { useAddOrderMutation } = orderApi;
