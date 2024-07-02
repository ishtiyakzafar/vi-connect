import React from "react";
import "./ContactCard.scss";
import img1 from "../../assets/images/contact/img1.jpg";

const addressData = [
  {
    id: "1",
    img: img1,
    title: "Ranchi (Corporate Office)",
    address:
      "GS-4 & GS-10, Vinayaka Apartment, Kadru, Ranchi- 834002 (Jharkhand) 0651-7966283, (+91) 9608822230 (+91) 9709272222",
  },
  {
    id: "2",
    img: img1,
    title: "Patna Office",
    address:
      "C/O Bhagwan Das Ray South Mandiri Kathpul, Patna- 1(Bihar) 0651-7966283, (+91) 9608822230 (+91) 9709272222",
  },
  {
    id: "3",
    img: img1,
    title: "Pune Office",
    address:
      "214,Gera Imperium Rise HPW9+G5W, 247 & 250, Hinjawadi Phase 2 Rd, Hinjawadi Phase II, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057. Mobile No +91-9608822230",
  },
];

const ContactCard = () => {
  return (
    <div className="address_card">
      <div className="container">
        <div className="row gy-4">
          {addressData.map((item) => (
            <div data-aos="fade-up" key={item.id} className="col-md-4">
              <div className="contact_card">
                <div className="bg_overlay"></div>
                <img className="img-fluid" src={item.img} alt="img" />

                <div className="card_content">
                  <h5>{item.title}</h5>
                  <p>{item.address}</p>
                  <a href="#dropMsg">
                    <button className="btn btn-outline-dark mt-3">
                      Drop a message
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
