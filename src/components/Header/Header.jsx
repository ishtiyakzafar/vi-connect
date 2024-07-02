import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="container">
        <div className="menu">
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <Link
                style={{ color: location.pathname === "/" && "#00b9c5" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: location.pathname === "/about-us" && "#00b9c5",
                }}
                to="/about-us"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: location.pathname === "/products" && "#00b9c5",
                }}
                to="/products"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color: location.pathname === "/contact-us" && "#00b9c5",
                }}
                to="/contact-us"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
