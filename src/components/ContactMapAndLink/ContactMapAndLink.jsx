import React from "react";
import "./ContactMapAndLink.scss";

const ContactMapAndLink = () => {
  return (
    <div data-aos="fade-up" className="google-map">
      <iframe
        title="hello"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.2302325211463!2d85.30831031444814!3d23.3436720101097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e0de14ca473b%3A0x3878943e4a99dad4!2sIOTAS%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1649675405526!5m2!1sen!2sin"
        width="100%"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMapAndLink;
