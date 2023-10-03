"use client";

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/order/CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CheckoutOrderPage = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
    {
      locale: "en",
    }
  );
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const orderedProducts = useSelector(
    (state: RootState) => state.order.orderedProducts
  );
  const products = orderedProducts.map((product) => {
    return {
      id: product.id,
      quantity: product.quantity,
    };
  });

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions;

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/process`,
          {
            products,
          }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error(error);
      }
    };

    fetchClientSecret();
  }, []);
  return (
    <>
      {clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : null}
    </>
  );
};

export default CheckoutOrderPage;
