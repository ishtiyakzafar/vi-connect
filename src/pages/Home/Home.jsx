import React from "react";
import "./Home.scss";
import SectionOne from "../../components/SectionOne/SectionOne";
import ServicesCard from "../../components/ServicesCard/ServicesCard";

const data = {
  order1: "order-1",
  order2: "order-2",
  img: "https://img.freepik.com/free-photo/close-up-hands-working-project_23-2148925541.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  title: "Lorem Ipsum is simply dummy text",
  heading: "Lorem Ipsum is simply dummy text of the printing",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div data-aos="fade-up" className="hero-content">
            <h1>Automated Monitoring and Control Systems</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn btn-primary">Register Now</button>
          </div>
        </div>
      </div>
      <SectionOne data={data} />
      <ServicesCard />

      <div className="help_center">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6">
              <div data-aos="fade-up">
                <h5>HELP & SUPPORT</h5>
                <p>Find support for a product or solution you have.</p>
                <button className="btn btn-primary">Get Support</button>
              </div>
            </div>
            <div className="col-md-6">
              <div data-aos="fade-up">
                <h5>SALES</h5>
                <p>For information about how we can help your business.</p>
                <button className="btn btn-primary">TALK TO SALES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
