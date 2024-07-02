import React from "react";
import "./Banner.scss";
import { Link, useLocation } from "react-router-dom";

const Banner = ({ isPortFolioBanner, pathUrl, image, width, data }) => {
  const loaction = useLocation();
  return (
    <div
      // data-aos="zoom-out"
      className={isPortFolioBanner ? "banner isPortFolioBanner" : "banner"}
      style={{
        backgroundImage: `linear-gradient(rgba(14, 15, 32, 0.8), rgba(14, 15, 32, 0.8)), url(${data.image})`,
      }}
    >
      <div className="container">
        <div
          className={`banner-content ${true && "case"} ${
            isPortFolioBanner && "isPortFolioBanner"
          }`}
        >
          {/* <div className="bread_crum">{data.page}</div> */}
          <div className="banner-content-inner" data-aos="fade-up">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <div className="banner_link">
              <Link to="/contact-us">
                Get in Touch <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
