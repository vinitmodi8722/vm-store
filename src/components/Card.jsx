import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const Card = ({ product }) => {
  const { id, imageSrc, itemName, price, rating } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={itemName} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{itemName}</h2>
        <div className="card-rating">Rating: {rating}</div>
        <div className="card-price">Price:- {price}</div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
