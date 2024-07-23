import React from 'react';
import Card from "./Card";
import productItem from './productItem';


const Girlsection = ({ handleClick }) => {
  const products = productItem.filter(product => product.id >= 1 && product.id <= 9);
  return (
    <div className="product-list2 bg-black">
        {products.map((product) => (
          <Card
            key={product.id}
            price={product.price}
            product={product}
            handleClick={handleClick} 
          />
        ))}
      </div>
  )
}

export default Girlsection

