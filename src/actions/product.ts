"use server";

import { cookies } from "next/headers";

export const getProducts = async (page: number) => {
  const jwt = cookies().get("jwt")?.value;
  try {
    const res = await fetch(`${process.env.API_URL}/products?page=${page}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string) => {
  const jwt = cookies().get("jwt")?.value;
  try {
    const res = await fetch(`${process.env.API_URL}/products/${id}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  const jwt = cookies().get("jwt")?.value;
  try {
    const res = await fetch(`${process.env.API_URL}/categories`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
