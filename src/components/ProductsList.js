import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          className="product-card-link"
        >
          {" "}
          <ProductCard productInfo={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
