import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  deleteItem,
} from "../redux/slices/cartSlice";
import { MdDelete } from "react-icons/md";
import "../App.css";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  const makepayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PeAZG2LI5C4ZNCH1Wxyc7A7gkFuSDapcPzQtpue0QqtJued5iJqn3ihVK23Jbhvaizm3ZqeSXqWwqMEG5T4XE7b00WW8nPTsx"
    );

    const body = {
      products: cartItems,
    };

    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      <div className="cart ml-5 mr-5 mt-9 box-border border-4 p-3">
        <h1 className="bg-slate-600 rounded-lg p-5 text-center text-orange-500 mb-2">
          Add to Cart products
        </h1>
        <div className="box">
          <ul className="items">
            {cartItems.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between border-b-2 py-2"
              >
                <div className="flex-1">
                  <div className="flex items-center">
                    <img
                      src={product.imageSrc}
                      alt={product.itemName}
                      className="cart-item-image"
                    />
                    <p className="ml-3 bg-slate-700 p-2 rounded-lg text-orange-300">
                      {product.itemName} - Price:- {product.price.toFixed(2)} -
                      Quantity: {product.quantity}
                    </p>
                  </div>{" "}
                </div>
                <div className="qubuttons">
                  <button
                    className="focus:outline-none ml-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                  <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <button
                    className="focus:outline-none text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(product.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="mt-3 font-bold text-yellow-300 text-center bg-red-800">
          Total Price: {totalPrice.toFixed(2)} RS
        </h2>
        <div className="flex justify-end">
          <button
            onClick={makepayment}
            className="bg-transparent mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Ckeck-out
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
