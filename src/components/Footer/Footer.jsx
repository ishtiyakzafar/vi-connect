import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row gy-4  justify-content-between">
            <div data-aos="fade-up" className="col-md-4">
              <div className="logo pb-4">
                <img width={100} src={logo} alt="logo" />
              </div>
              <p className="pb-3">
                VI-Connect Innovation Tower, Level 18, Plot No. 200, Elm Street,
                Downtown City – 123456, Fictionland
              </p>

              <p>+91 651-1236547</p>

              <div className="d-flex column-gap-4">
                <a href="" target="_blank" className="social-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                    alt="icon"
                  />
                </a>
                <a href="" target="_blank" className="social-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/5968/5968958.png"
                    alt="icon"
                  />
                </a>
                <a href="" target="_blank" className="social-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png"
                    alt="icon"
                  />
                </a>
                <a href="" target="_blank" className="social-icon">
                  <img
                    style={{ marginTop: "6px" }}
                    src="https://cdn-icons-png.flaticon.com/128/717/717426.png"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" className="col-md-2">
              <h6>INDUSTRIES</h6>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className="col-md-2">
              <h6>SERVICES</h6>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className="col-md-2">
              <h6>CAREERS</h6>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          Copyright © 2022-24 | VI-Connect Solutions Pvt. Ltd. | All rights
          reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
