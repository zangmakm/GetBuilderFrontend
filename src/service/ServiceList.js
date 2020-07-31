import React from "react";
import serviceImg1 from "./assets/services/underfloor heating.jpg";
import serviceImg2 from "./assets/services/paint.jpg";
import serviceImg3 from "./assets/services/new-home.jpg";
import serviceImg4 from "./assets/services/wallpaper.jpg";
import serviceImg6 from "./assets/services/construction.jpg";
import GridContainer from "../UI/GridContainer";
import OverlayImg from "../UI/OverlayCard/OverlayImg";

const services = [
  { id: 1, img: serviceImg1, content: "Underfloor Heating" },
  { id: 2, img: serviceImg2, content: "Home Renovation" },
  { id: 3, img: serviceImg3, content: "New Home Construction" },
  { id: 4, img: serviceImg4, content: "Re-Roofing" },
  { id: 6, img: serviceImg6, content: "Home Extensiton" },
];

const ServiceList = () => {
  return (
    <div style={{ margin: "10% auto", width: "80%" }}>
      <h3 style={{ textAlign: "center" }}>All We Provide</h3>
      <GridContainer>
        {services.map((service) => (
          <OverlayImg
            key={service.id}
            overlayImg={service.img}
            overlayContent={service.content}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default ServiceList;
