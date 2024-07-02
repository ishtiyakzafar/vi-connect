import React from "react";
import "./About.scss";
import Banner from "../../components/Banner/Banner";
import SectionOne from "../../components/SectionOne/SectionOne";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const data = {
  order1: "order-1",
  order2: "order-2",
  img: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038860.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  title: "Lorem Ipsum is simply dummy text",
  heading:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const banner = {
  title: "About VI-Connect Solutions",
  desc: "VI-Connect Solutions is a leader in automation, offering innovative technology to streamline processes and enhance efficiency.",
  image:
    "https://img.freepik.com/free-photo/close-up-researcher-holding-chip_23-2148925507.jpg?t=st=1719649792~exp=1719653392~hmac=d05bc43dfccfbf177bce62ff241b2ad00c2ffb847cf4691f5ff63e4278ef7baa&w=996",
  page: "About Us",
};

const data3 = [
  {
    id: 1,
    img: "https://img.freepik.com/free-photo/two-businessman-shake-hand-coffee-shop_1150-6402.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
    title: "Our business areas",
    desc: "VI-Connect operations are organized into four global business areas, which in turn are made up of 21 divisions.",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
    title: "Our strategy",
    desc: "Learn more about VI-Connect strategy, priorities and how we are moving forward to create superior value.",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/business-people-teamwork_53876-89051.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
    title: "Our purpose",
    desc: "Our purpose is at the core of who we are and what we do.",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/bulb-gears_1134-173.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
    title: "Technology and innovation",
    desc: "VI-Connect delivers end-to-end value by driving advances across a wide spectrum of industrial technologies.",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
    title: "VI-Connect Ability™",
    desc: "VI-Connect Ability is the company’s portfolio of digital solutions empowering data-driven decisions for safer, smarter operations.",
  },
  {
    id: 6,
    img: "https://img.freepik.com/free-photo/partnership-handshake-innovation-corporate-business-concept_53876-104048.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
    title: "Partnerships",
    desc: "VI-Connect is passionate about creating success – together.",
  },
  {
    id: 7,
    img: "https://img.freepik.com/free-photo/beautiful-view-wind-turbines-grass-covered-field-captured-holland_181624-6013.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
    title: "Sustainability",
    desc: "VI-Connect is committed to sustainable value creation.",
  },
  {
    id: 8,
    img: "https://img.freepik.com/free-photo/front-view-businessman-with-colorful-cones-representing-growth_23-2148780634.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
    title: "Quarterly results and annual reports",
    desc: "Get the key figures on our financial performance.",
  },
];

const About = () => {
  return (
    <>
      <Banner data={banner} />
      <SectionOne data={data} />

      <div className="about_card_box">
        <div className="container">
          <div className="row pb-3">
            <div className="col-md-8">
              <SectionHeading
                title="Lorem Ipsum is simply dummy text"
                heading="Lorem Ipsum is simply dummy text"
              />
            </div>
          </div>

          <div className="row gy-3">
            {data3.map((item) => (
              <div data-aos="fade-up" key={item.id} className="col-md-3">
                <div className="about_card">
                  <img src={item.img} className="img-fluid" alt="img" />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
