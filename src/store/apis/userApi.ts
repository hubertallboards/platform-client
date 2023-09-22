import { UserFormLogin, UserLoginResponse } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  }),
  tagTypes: ["User"],
  endpoints(builder) {
    return {
      login: builder.mutation<UserLoginResponse, UserFormLogin>({
        query: (userFormLogin) => ({
          url: "/login",
          method: "POST",
          body: userFormLogin,
          credentials: "include",
        }),
      }),
    };
  },
});

export const { useLoginMutation } = userApi;
