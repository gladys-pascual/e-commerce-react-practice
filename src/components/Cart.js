import React from "react";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = ({ cartArray, totalPrice, handleClearCart }) => {
  console.log(cartArray);
  return (
    <div className="cart-wrapper">
      <div className="cart">
        <div className="row">
          <div className="col title">Product Name</div>
          <div className="col-2 title">Price</div>
          <div className="col-2 title">Quantity</div>
        </div>
        <div>
          {cartArray.length > 0 ? (
            cartArray.map((cartItem) => (
              <CartItem product={cartItem} key={cartItem.id} />
            ))
          ) : (
            <CartEmpty />
          )}
        </div>
        <div className="cart-total-and-button">
          <button onClick={handleClearCart} className="button">
            Clear cart
          </button>
          <div className="cart-total">Cart Total: €{totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
