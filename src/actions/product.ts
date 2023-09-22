"use server";

import { cookies } from "next/headers";

export const getProducts = async () => {
  const jwt = cookies().get("jwt")?.value;
  console.log("jwt", jwt);
  try {
    const res = await fetch(`${process.env.API_URL}/products`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
    });
    const data = await res.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
