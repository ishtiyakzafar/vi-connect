import React from "react";
import "./SectionOne.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const SectionOne = ({ data }) => {
  return (
    <div className="container">
      <div className="manu_info">
        <div className="row g-md-5 gy-4 align-items-center">
          <div data-aos="fade-up" className={`col-md-6 ${data.order1}`}>
            <SectionHeading
              title={data.title}
              heading={data.heading}
              description={data.desc}
            />
          </div>
          <div data-aos="fade-up" className={`col-md-6 ${data.order2}`}>
            <img alt="img" className="img-fluid rounded-1" src={data.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
