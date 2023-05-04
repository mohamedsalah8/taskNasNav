import React from "react";
import classes from "./TopNav.module.scss";

const TopNav = () => {
  return (
    <div className={classes["topNav"]}>
      <div className={classes["firstTopNav"]}>
      <div className={classes.logo}>
        <img src="images/Group 770.png" alt="menu" />
        <img src="images/Group 769.png" alt="logo" />
      </div>
      <div className={classes.offer}>
        <img src="images/Path 797.png" alt="arrow left" />
        <p>
          Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
        </p>
        <img src="images/Path 796.png" alt="arrow " />
      </div>
      <ul className={classes["icons"]}>
        <li>
          <img src="images/contact.png" alt="contact " />{" "}
          <span>Contact Us</span> 
        </li>
        <li>
          <img src="images/trackorder.png" alt="track " />
          <span>Track Order</span>
        </li>
        <li>
          <img src="images/findstore.png" alt="find" />
          <span>Find A Store</span>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default TopNav;
