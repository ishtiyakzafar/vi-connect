import React from "react";
import "./ContactUsForm.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const ContactUsForm = () => {
  return (
    <div id="dropMsg" className="contact_us_form">
      <div className="container">
        <div className="row gy-4 justify-content-between align-items-cenxter">
          <div className="col-md-6">
            <div className="contact_info">
              <SectionHeading
                title="CONTACT us"
                heading="Let's Scale Your Brand, Together"
              />
              <img
                data-aos="fade-up"
                className="img-fluid mt-4 rounded-1"
                src={
                  "https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37943.jpg?t=st=1719661280~exp=1719664880~hmac=8e45830282e0d0c41efdb202858df30f0670dd405d695687c9b0909e51807ab4&w=996"
                }
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-5">
            <form data-aos="fade-up" className="contact_form">
              <input required type="text" placeholder="Your Name" />
              <input required type="email" placeholder="Email Address" />
              <input required type="number" placeholder="Your Phone" />
              {/* <select required>
                <option value="">Requirement</option>
                <option value="">Web Development</option>
                <option value="">Mobile App Development</option>
              </select> */}
              <textarea
                required
                placeholder="Message"
                cols="30"
                rows="5"
              ></textarea>

              <button className="btn btn-info mt-3 text-white">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
