import React from "react";
import StarRatings from "react-star-ratings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products, handleAddToCart }) => {
  const { id } = useParams();
  const matchProduct = products.find((product) => product.id.toString() === id);
  // const matchProduct = products.find(
  //   (product) => +routeProps.match.params.id === product.id
  // );

  const notify = () => toast("Product added to cart!");

  const handleClick = () => {
    handleAddToCart(matchProduct);
    notify();
  };

  return (
    <div className="product-details-wrapper">
      <div className="product-details">
        {!matchProduct ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              <div className="product-image">
                <img
                  src={matchProduct.product_image}
                  alt={matchProduct.product_title}
                />
              </div>
            </div>
            <div className="product-description">
              <h1>{matchProduct.product_title}</h1>
              <StarRatings
                rating={matchProduct.product_rating}
                starRatedColor="pink"
                starDimension="20px"
              />
              <p>{matchProduct.product_description}</p>
              <div className="price-and-button">
                <h3>€{matchProduct.product_price.toFixed(2)}</h3>
                <button className="button" onClick={handleClick}>
                  Add to Cart
                </button>
              </div>

              <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
