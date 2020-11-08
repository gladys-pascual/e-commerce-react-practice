import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cartArray: [],
      totalPrice: 0,
    };
  }

  fetchProducts = () => {
    fetch("https://floating-temple-56492.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
        })
      );
  };

  handleAddToCart = (itemAddedToCart) => {
    const { cartArray } = this.state;
    let isInCart = cartArray.find((item) => itemAddedToCart.id === item.id);

    if (isInCart) {
      isInCart.quantity++;
    } else {
      isInCart = {
        ...itemAddedToCart,
        quantity: 1,
      };
      this.setState({ cartArray: [...cartArray, isInCart] });
    }

    this.setState({
      totalPrice: this.state.totalPrice + itemAddedToCart.product_price,
    });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  handleClearCart = () => {
    this.setState({ cartArray: [], totalPrice: 0 });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="App">
        <Navbar totalPrice={this.state.totalPrice} />
        <Switch>
          <Route exact path="/" render={() => <Home products={products} />} />
          <Route
            path="/cart"
            render={() => (
              <Cart
                cartArray={this.state.cartArray}
                totalPrice={this.state.totalPrice}
                handleClearCart={this.handleClearCart}
              />
            )}
          />
          <Route
            path="/products/:id"
            render={(routeProps) => (
              <ProductDetails
                routeProps={routeProps}
                products={products}
                handleAddToCart={this.handleAddToCart}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
