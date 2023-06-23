import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "./elements/Button";
import { cartProducts, clearCart } from "../stores/cart/cartSlice";
import { clearAddress, getAddress } from "../stores/userInfo/addressSlice";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector(cartProducts);
  const address = useSelector(getAddress);
  const navigate = useNavigate();
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !cart?.length || !address) {
      return;
    }

    setLoading(true);
    try {
      const {
        data: { clientSecret },
      } = await axios.post(
        "https://food-delivery-9flg.onrender.com/create-payment-intent",
        {
          orderItems: cart,
        }
      );

      // dev -> http"//localhost:5000/
      // prod -> https://food-delivery-9flg.onrender.com/

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        });

      if (stripeError) {
        setError(stripeError);
      } else if (paymentIntent.status === "succeeded") {
        dispatch(clearAddress());
        dispatch(clearCart());
        navigate("/payment-success");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };
  return (
    // test card : 4242 4242 4242 4242

    <form
      onSubmit={handleSubmit}
      className="md:-2/3 md:mx-auto px-2 pt-1"
      id="payment-form"
    >
      <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">
        Please enter your card details
      </label>
      <div className="my-4">
        <CardElement id="card-element" />
      </div>
      <div className="flex justify-center p-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Pay"}
        </Button>
      </div>
    </form>
  );
};

export function StripeWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
