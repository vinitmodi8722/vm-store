import React from 'react'
import Card from "./Card";
import productItem from './productItem';


const Mansection = ({handleClick}) => {
  const products = productItem.filter(product => product.id >= 11 && product.id <= 19);
  return (
    <div className="product-list">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product} 
            onClick={handleClick}
          />
        ))}
      </div>
  )
}

export default Mansection

