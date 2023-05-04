import React from "react";
import classes from "./MainHead.module.scss";

const MainHead = ({ count, showcart }) => {
  const showCart = () => {
    showcart(true);
  };
  return (
    <div className={classes["middleHead"]}>
      <div className={classes["mainHead"]}>
        <div className={classes.searchInp}>
          <i>
            <img src="images/search.png" alt="search icon" />
          </i>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <img src="images/Group 745.png" alt="brand logo" />
        </div>
        <ul className={classes.iconsProduct}>
          <li onClick={showCart}>
            <div>
              <div>{count}</div>
              <img src="images/cart.png" alt="cart icon" />
            </div>
            Cart
          </li>
          <li>
            <i>
              <img src="images/wishlist.png" alt="wishlist icon" />
            </i>
            Wishlist
          </li>
          <li>
            <i>
              <img src="images/login.png" alt="login icon" />
            </i>{" "}
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHead;
