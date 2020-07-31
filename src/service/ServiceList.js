import React from "react";
import GridContainer from "../UI/GridContainer";
import OverlayImg from "../UI/OverlayCard/OverlayImg";
import { SERVICE_URL } from "../routes/URLMap";
import { SERVICES } from "./data";

const toLink = (id) => {
  return `${SERVICE_URL}/${id}`;
};

const ServiceList = () => {
  return (
    <div style={{ margin: "10% auto", width: "80%" }}>
      <h3 style={{ textAlign: "center" }}>All We Provide</h3>
      <GridContainer>
        {SERVICES.map((service) => (
          <OverlayImg
            key={service.id}
            overlayImg={service.img}
            overlayContent={service.content}
            to={toLink(service.id)}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default ServiceList;
