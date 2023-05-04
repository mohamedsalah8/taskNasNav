import React from "react";
import classes from './NavBar.module.scss'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${classes["navBar"]}`}>
        <div className="container" style={{ width: "1170px" }}>
          <h2 className={classes["nameCategory"]}> Category</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 w-100 justify-content-between">
              <li><Link to="#">Men</Link> </li>
              <li><Link to="#">Women</Link></li>
              <li><Link to="#">Unisex</Link></li>
              <li><Link to="#">Kids</Link></li>
              <li><Link to="#">Best Sellers</Link></li>
              <li><Link to="#">New Arrivals</Link></li>
              <li><Link to="#">Offers</Link></li> 
            </ul>
          </div>
        </div>
      </nav>

    </>
  )

};

export default NavBar;


