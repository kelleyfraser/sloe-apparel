import React from 'react';

function Product(props) {
  // Extract values from props
  let name = props.product.name;
  let imgLink = props.product.img;
  let price = props.product.price;

  // Return a product-card element
  return (
    <div className="product-card">
      <img src={imgLink} />
      <p>{name}</p>
      <p className="price">£{price}</p>
    </div>
  );
}

export default Product;
