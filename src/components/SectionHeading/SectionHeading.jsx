import React from "react";
import "./SectionHeading.scss";

const SectionHeading = ({ title, heading, description }) => {
  return (
    <div data-aos="fade-up" className="about-us-content">
      {title && <h6>{title}</h6>}
      {heading && <h1>{heading}</h1>}
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
