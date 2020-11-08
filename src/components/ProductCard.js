import React from "react";
import StarRatings from "react-star-ratings";

const ProductCard = ({ productInfo }) => {
  return (
    <div className="product-card">
      <div className="product-card-img-wrapper">
        <img src={productInfo.product_image} alt={productInfo.product_title} />
      </div>
      <div className="title-price-rating">
        <h3>{productInfo.product_title}</h3>
        <p>€{productInfo.product_price.toFixed(2)}</p>
        <StarRatings
          rating={productInfo.product_rating}
          numberOfStars={5}
          starDimension="20px"
          starRatedColor="pink"
        />
      </div>
    </div>
  );
};

export default ProductCard;
