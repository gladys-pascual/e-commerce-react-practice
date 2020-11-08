import React from "react";
import ProductsList from "./ProductsList";

const Home = ({ products }) => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <h1>Welcome to our online shop</h1>
        <ProductsList products={products} />
      </div>
    </div>
  );
};

export default Home;
