import React, { Component, Fragment } from "react";
import CategoryNav from "../components/CategoryNav";
import ProductSlider from "../components/ProductSlider";
import classes from "./Product.module.scss";
import MainHead from "../components/MainHead";
import TopNav from "./../components/TopNav";
import NavBar from "./../components/NavBar";
import Footer from "../components/Footer";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countQuantity: 0,
      showCart: false,
      productId: 1,
      cartItems: [],
    };
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  showCartHandler = (isShown) => {
    this.setState({ showCart: isShown });
  };

  showProductDetails = (productId) => {
    //Receive Data From Product Slider To Show in Details

    //Save Data in State to send To Product Details to Show
    this.setState({ productId: productId });
  };

  addToCartHandler = (product, quantity) => {
    //Recieve Product and Quantity From Product Details and Add to cart

    const itemIndex = this.state.cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (itemIndex !== -1) {
      // If the product is already in the cart, update the quantity
      const updatedCartItems = [...this.state.cartItems];
      updatedCartItems[itemIndex].quantity += quantity;
      this.setState({ cartItems: updatedCartItems });
    } else {
      product.quantity = quantity;
      this.setState({ cartItems: [...this.state.cartItems, product] });
    }
  };

  removeFromCart(itemToRemoveId) {
    console.log("ITEM REMOVED FROM CART id = " + itemToRemoveId);
    const updatedCartItems = this.state.cartItems.filter(
      (item) => item.id !== itemToRemoveId
    );
    this.setState({ cartItems: updatedCartItems });
  }

  render() {
    let count = 0;
    for (let i = 0; i < this.state.cartItems.length; i++) {
      const item = this.state.cartItems[i];
      count += item.quantity;
    }
    return (
      <Fragment>
        <header>
          <TopNav />
          <MainHead count={count} showcart={this.showCartHandler} />
          <NavBar />
          <CategoryNav />
        </header>

        <ProductDetails
          productId={this.state.productId}
          receiveProduct={this.addToCartHandler}
        />
        {this.state.showCart && (
          <Cart
            items={this.state.cartItems}
            removeHandler={this.removeFromCart}
            showcart={this.showCartHandler}
          />
        )}

        <div className={classes.container}>
          <h1>Similar Products</h1>
          <p>You may like these products also</p>
        </div>
        <ProductSlider recieveId={this.showProductDetails} />

        <Footer />
      </Fragment>
    );
  }
}

export default Product;
