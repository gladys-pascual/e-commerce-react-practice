import React from "react";

const CartItem = ({ product }) => {
  return (
    <div className="row">
      <div className="col">{product.product_title}</div>
      <div className="col-2">€{product.product_price.toFixed(2)}</div>
      <div className="col-2">{product.quantity}</div>
    </div>
  );
};

export default CartItem;
