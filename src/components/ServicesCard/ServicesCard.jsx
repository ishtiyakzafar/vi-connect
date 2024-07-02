import React from "react";
import "./ServicesCard.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const blogData = [
  {
    id: 1,
    titile: "The latest in Electrification",
    img: "https://img.freepik.com/free-photo/technician-repairing-computer-computer-hardware-repairing-upgrade-technology_1150-8861.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
    date: "Our leading technologies in electrification, automation, and digitalization are accelerating the energy transition and enabling a low carbon future.",
  },
  {
    id: 2,
    titile: "The latest in Electrification",
    img: "https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology-remix_53876-110820.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
    date: "Our leading technologies in electrification, automation, and digitalization are accelerating the energy transition and enabling a low carbon future.",
  },
  {
    id: 3,
    titile: "The latest in Electrification",
    img: "https://img.freepik.com/free-photo/diagnosing-circuit-with-multimeter_23-2148254096.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
    date: "Our leading technologies in electrification, automation, and digitalization are accelerating the energy transition and enabling a low carbon future.",
  },
];

const ServicesCard = () => {
  return (
    <div className="blog">
      <div className="container">
        <div data-aos="fade-up" className="row">
          <div className="col-md-6">
            <div className="heading">
              <SectionHeading
                heading="Innovations at work"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry when an unknown printer took a galley of
                type and scrambled."
              />
            </div>
          </div>
        </div>

        <div className="row gy-4">
          {blogData.map((blog) => (
            <div key={blog.id} data-aos="fade-up" className="col-md-4">
              <div className="blog-card">
                <img src={blog.img} alt="blog" />
                <div className="content">
                  <h1>{blog.titile}</h1>
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
