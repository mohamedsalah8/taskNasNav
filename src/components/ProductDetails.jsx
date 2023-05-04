import React, { Component } from "react";
import classes from "./ProductDetails.module.scss";
import { DUMMY_PRODUCTS } from "../services/DummyProducts";
import ProductImageGallery from "./ProductImageGallery";

export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      quantityCount: 1,
    };
  }

  addToCartHandler = (pr) => {
    const productQuantity = this.state.quantityCount;
    this.props.receiveProduct(pr, productQuantity);
  };

  increaseCount = () => {
    this.setState({ quantityCount: this.state.quantityCount + 1 });
  };

  decreaseCount = () => {
    this.setState({ quantityCount: this.state.quantityCount - 1 });
  };

  render() {
    const DataProduct = DUMMY_PRODUCTS.find(
      (product) => product.id === this.props.productId
    );
    return (
      <section className={classes["productDetails"]}>
        <ProductImageGallery images={DataProduct.img} />
        <div className={classes["sub-details"]}>
          <div className={classes["details"]}>
            <div className={classes["logImg"]}>
              <img src="images/logobrand.png" alt="brand" />
            </div>
            <p className={classes.title}>{DataProduct.title}</p>
            <p className={classes.category}>{DataProduct.category}</p>
            <div className={classes.rate}>
              <div className={classes.star}>
                <img src="images/star.png" alt="star" />
                <img src="images/star.png" alt="star" />
                <img src="images/star.png" alt="star" />
                <img src="images/star.png" alt="star" />
                <img src="images/star2.png" alt="star" />
              </div>
              <p>{DataProduct.rate} of 5</p>
              <div>{DataProduct["rate-count"]} Rates</div>
            </div>
            <div className={classes.price}>
              <h2>
                {DataProduct.price} <span>LE</span>
              </h2>
              {DataProduct.disscount && <del>9.999 LE</del>}
              {DataProduct.disscount && <h4>{DataProduct.disscount}% Off</h4>}
            </div>
          </div>
          <hr className={classes.line} />
          <div className={classes.size}>
            <p className={classes.title}>Size</p>
            <div>
              {DataProduct.size.map((size, index) => (
                <button key={index}>{size}</button>
              ))}
            </div>
          </div>
          <hr className={classes.line} />
          <div className={classes.color}>
            <p className={classes.title}>Color</p>
            <div>
              <img src="images/Group 354.png" alt="color" />
              <img src="images/Group 356.png" alt="color" />
            </div>
          </div>
          <hr className={classes.line} />

          <div className={classes.quantity}>
            <p className={classes.title}>Quantity</p>
            <div>
              <div className={classes["btn-quantity"]}>
                <button
                  onClick={this.decreaseCount}
                  disabled={this.state.quantityCount === 1}
                  className={classes.btnOne}
                >
                  -
                </button>
                <div>{this.state.quantityCount}</div>
                <span onClick={this.increaseCount}>+</span>
              </div>
            </div>
            <div className={classes["btn-action"]}>
              <button onClick={() => this.addToCartHandler(DataProduct)}>
                Add To Cart
              </button>
              <button>Pickup From Store</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
