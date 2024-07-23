import React from "react";
import { useParams } from "react-router-dom";
import productItem from "./productItem";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function Searchbyid() {
    const dispatch = useDispatch();
  const { id } = useParams();
  const product = productItem.find((product) => product.id === parseInt(id));
  
  const handleAddToCart = () => {
    dispatch(addItem(product));
    console.log(product)
  }


  return (
    <div className="main-contsiners">
      {product ? (
        <div className="searched-card">
          <h2 className="searched-details flex justify-center bg-orange-300 mt-2 border-2 font-bold font-serif border-black">Searched Product Details</h2>
          <div className="card mt-10 ml-11">
            <img src={product.imageSrc} alt={product.itemName} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{product.itemName}</h2>
              <div className="card-rating">Rating: {product.rating}</div>
              <div className="card-price">Price:- {product.price}</div>
              <button className="add-to-cart-button mr-6" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
export default Searchbyid;
