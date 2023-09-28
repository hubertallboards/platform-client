"use client";

import React from "react";
import { Product } from "../../types/product";
import { useDispatch } from "react-redux";
import { addProductToOrder } from "@/store/slices/orderSlice";

type ButtonBuyProps = {
  product: Product;
};

const ButtonBuy = ({ product }: ButtonBuyProps) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(addProductToOrder(product))}>
      Add To Cart
    </button>
  );
};

export default ButtonBuy;
