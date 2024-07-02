import React from "react";
import "./Product.scss";
import Banner from "../../components/Banner/Banner";
import SectionOne from "../../components/SectionOne/SectionOne";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const banner = {
  title: "Automation Solutions",
  desc: "Explore our cutting-edge automation solutions designed to streamline your operations and enhance efficiency.",
  image:
    "https://img.freepik.com/free-photo/website-hosting-concept-with-circuits_23-2149406782.jpg?t=st=1719660950~exp=1719664550~hmac=419914f12c718bbee8a2f016b278dd511cad0aea3a4b4767337d9c9eef34abb3&w=1380",
  page: "Product",
};

const product1 = {
  order1: "order-1",
  order2: "order-2",
  img: "https://img.freepik.com/free-photo/young-man-woman-vr-glasses-doing-experiments-robotics-laboratory-robot-tools_1268-23376.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
  title: "Product portfolio",
  heading: "Next-gen robotic systems for industrial automation",
  desc: "Simplicity and scalability for all your needs:  AC500 PLC platform is the ideal choice for high availability, extreme environments, condition monitoring, motion control and safety solutions. The AC500-eCo, AC500, AC500-XC and AC500-S scalable PLC ranges provide solutions for small, medium and high-end applications. The robust CP600 control panel platform harmonizes with AC500 PLCs and Ability™ Automation Builder software.",
};

const productData = [
  {
    id: "1",
    title: "Cement",
    img: "https://img.freepik.com/free-photo/cement-factory-interiors-industrial-cement-production-conveyor-workers-shop-production-line_645730-173.jpg?t=st=1719658126~exp=1719661726~hmac=a3eabee4996e78cf7b9d567742263186d28c08e919f0534e88bc1350a5b7fd13&w=996",
  },
  {
    id: "2",
    title: "Cranes and hoists",
    img: "https://img.freepik.com/free-photo/crane-building-construction-site_1232-2594.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
  },
  {
    id: "3",
    title: "Buildings",
    img: "https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
  {
    id: "4",
    title: "Food & beverage",
    img: "https://img.freepik.com/free-photo/transparent-plastic-bottles-filled-with-yellow-substance_273609-13377.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
  },
  {
    id: "5",
    title: "Tunnels",
    img: "https://img.freepik.com/free-photo/architecture_1122-1940.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
  {
    id: "6",
    title: "Machine building",
    img: "https://img.freepik.com/free-photo/plant-automotive-industry-shop-production-assembly-machines_645730-491.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
  },
  {
    id: "1",
    title: "Marine",
    img: "https://img.freepik.com/free-photo/aerial-view-cargo-ship-cargo-container-harbor_335224-1374.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
  {
    id: "1",
    title: "Metals",
    img: "https://img.freepik.com/free-photo/worker-is-controlling-process-rail-cutting-busy-metal-factory_613910-17188.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
];

const services = [
  {
    id: "1",
    title: "Tailored to requirements",
    img: "https://cdn-icons-png.flaticon.com/128/2676/2676742.png",
  },
  {
    id: "2",
    title: "Scalable and modular",
    img: "https://cdn-icons-png.flaticon.com/128/12046/12046263.png",
  },
  {
    id: "3",
    title: "Advanced control capabilities",
    img: "https://cdn-icons-png.flaticon.com/128/15588/15588259.png",
  },
  {
    id: "4",
    title: "High level of integration",
    img: "https://cdn-icons-png.flaticon.com/128/1489/1489591.png",
  },
  {
    id: "5",
    title: "Reduced Energy Consumption",
    img: "https://cdn-icons-png.flaticon.com/128/8655/8655565.png",
  },
  {
    id: "6",
    title: "Improved Power Factor",
    img: "https://cdn-icons-png.flaticon.com/128/3103/3103584.png",
  },
];

const relatedProduct = [
  {
    id: "1",
    title: "Drives",
    img: "https://img.freepik.com/free-photo/man-using-external-storage-used_23-2149388496.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
  {
    id: "2",
    title: "Distributed control systems",
    img: "https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses-uses-tablet_169016-24215.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user",
  },
  {
    id: "3",
    title: "zenon",
    img: "https://img.freepik.com/free-photo/high-angle-female-technician-repairing-computer-motherboard_23-2148816431.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
  {
    id: "4",
    title: "Motors",
    img: "https://img.freepik.com/free-photo/new-blue-electric-motor-work_627829-10702.jpg?ga=GA1.1.1228619471.1719051129&semt=sph",
  },
];

const Product = () => {
  return (
    <>
      <Banner data={banner} />

      <div className="prod_sec">
        <div className="container">
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-md-6">
              <div>
                <SectionHeading
                  title={product1.title}
                  heading={product1.heading}
                  description={product1.desc}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div data-aos="fade-up" className="row g-4">
                <div className="col-md-6">
                  <div className="product_card">
                    <img
                      src="https://img.freepik.com/free-photo/young-man-woman-vr-glasses-doing-experiments-robotics-laboratory-robot-tools_1268-23376.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user"
                      alt=""
                      className="img-fluid"
                    />

                    <h5>Next-gen robotic systems</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product_card">
                    <img
                      src="https://img.freepik.com/free-photo/managing-smart-speakers-concept_23-2150170077.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user"
                      alt=""
                      className="img-fluid"
                    />

                    <h5>IoT-Enabled Sensors</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product_card">
                    <img
                      src="https://img.freepik.com/free-photo/remote-control-sound-settings-from-tablet_169016-23700.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user"
                      alt=""
                      className="img-fluid"
                    />

                    <h5>Automated Control Systems</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product_card">
                    <img
                      src="https://img.freepik.com/free-photo/3d-rendering-industry-40-concept_23-2149408311.jpg?ga=GA1.1.1228619471.1719051129&semt=ais_user"
                      alt=""
                      className="img-fluid"
                    />

                    <h5>Industrial IoT Platform</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ind_app">
            <div className="row">
              <div className="col-md-8">
                <SectionHeading
                  heading="Industries and applications"
                  description="The scalable and high-performant AC500 PLC platform enables advanced solutions in customer target applications for industries like water, tunnel, building infrastructure, data centers, district energy, machinery, material handling, food and beverage, marine and many more."
                />
              </div>
            </div>

            <div className="boxx">
              <div className="row g-4">
                {productData.map((item, ind) => (
                  <div data-aos="fade-up" className="col-md-3" key={ind}>
                    <div className="ind_card">
                      <img src={item.img} alt="" className="img-fluid" />
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="services">
            <div className="row">
              <div className="col-md-8">
                <SectionHeading
                  heading="Services"
                  description="Discover more from our comprehensive portfolio: Find further product information, downloads and programming examples."
                />
              </div>
            </div>

            <div className="boxx">
              <div className="row g-4">
                {services.map((item, ind) => (
                  <div data-aos="fade-up" className="col-md-2" key={ind}>
                    <div className="ind_card">
                      <img src={item.img} alt="" className="img-fluid" />
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="services sdsdsd">
            <div className="row">
              <div className="col-md-8">
                <SectionHeading
                  heading="Related products"
                  description="There is more technology to explore: Looking for the right drive or other devices? Boost your productivity with AC500 PLCs and smart product bundling."
                />
              </div>
            </div>

            <div className="boxx">
              <div className="row g-4">
                {relatedProduct.map((item, ind) => (
                  <div data-aos="fade-up" className="col-md-3" key={ind}>
                    <div className="ind_card">
                      <img src={item.img} alt="" className="img-fluid" />
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
