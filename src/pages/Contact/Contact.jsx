import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import ContactMapAndLink from "../../components/ContactMapAndLink/ContactMapAndLink";
import "./Contact.scss";

const banner = {
  title: "Get In Touch",
  desc: "Thank you for your interest in VI-Connect Solutions Pvt. Ltd. whether you’re a client, job seeker, journalist, or analyst, you can find the best way to contact us below.",
  image: "https://new-iotas.vercel.app/assets/contact-us-DcCZr2eV.png",
  page: "home / contact Us",
};

const Contact = () => {
  return (
    <>
      <Banner data={banner} />
      <ContactUsForm />
      <div style={{ paddingTop: "100px" }}>
        <ContactMapAndLink />
      </div>

      <div className="contact_addresssss">
        <div className="container">
          <div data-aos="fade-up" className="row gy-4">
            <div className="col-md-4">
              <div>
                <h1>Registered & Corporate Office:</h1>
                <p>
                  VI-Connect Innovation Tower, Level 18, Plot No. 200, Elm
                  Street, Downtown City – 123456, Fictionland
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h1>Business Enquiry Helpline:</h1>
                <p>1111 222 3333 (Mon-Sat, 8 am to 8 pm)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h1>Our Business Locations</h1>

                <p className="pb-2">Find our Business Locations like:</p>
                <li>Sales Offices</li>
                <li className="py-2">Factories</li>
                <li>Group Companies</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
