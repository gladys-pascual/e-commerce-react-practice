import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ totalPrice }) => {
  return (
    <nav className="navbar">
      <ul>
        <div className="nav-options">
          <NavLink exact to="/" activeClassName="selected">
            <li>Home</li>
          </NavLink>
          <NavLink to="/cart" activeClassName="selected">
            <li>Cart</li>
          </NavLink>
        </div>
        <div className="nav-price">
          <li>Total price: €{totalPrice.toFixed(2)} </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
