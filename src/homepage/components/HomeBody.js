import React from "react";
import styled from "styled-components";
import builderPng from "../assets/customer.png";
import pricePng from "../assets/price.png";
import supportPng from "../assets/technical-support.png";
import serviceImg1 from "../assets/services/001-underfloor heating.png";
import serviceImg2 from "../assets/services/002-paint.png";
import serviceImg3 from "../assets/services/003-paint roller.png";
import serviceImg4 from "../assets/services/004-wallpaper.png";
import serviceImg5 from "../assets/services/005-toolbox.png";
import serviceImg6 from "../assets/services/006-toolbox.png";
import Card from "../../UI/Card/Card";
import OverlayImg from "../../UI/OverlayCard/OverlayImg";
import { fetchBuilders } from "../../api/builders";

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-item: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-template-rows: minmax(100px, auto);
  margin: 40px;
  grid-auto-flow: dense;
  grid-gap: 20px;
`;

const services = [
  { img: serviceImg1, content: "underfloor heating" },
  { img: serviceImg2, content: "paint" },
  { img: serviceImg3, content: "paint roller" },
  { img: serviceImg4, content: "wallpaper" },
  { img: serviceImg5, content: "toolbox" },
  { img: serviceImg6, content: "toolbox" },
];

class HomeBody extends React.Component {
  state = {
    isLoading: false,
    error: null,
    builders: [],
  };

  componentDidMount() {
    this.loadBuilders();
  }

  loadBuilders = () => {
    this.setState({ isLoading: true }, () => {
      fetchBuilders().then((data) => {
        // console.log(data.builders);
        this.setState({
          isLoading: false,
          builders: data.builders,
        });
      });
    });
  };
  render() {
    return (
      <section>
        <div className="content">
          <h2>Builder Website</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consectetur vitae diam sollicitudin mattis. Nam sagittis dui non
            lectus feugiat accumsan. Phasellus sit amet magna ut diam pharetra
            euismod ac et enim. Proin leo elit, condimentum non bibendum in,
            feugiat sed ante. Fusce mattis scelerisque orci ut maximus. Maecenas
            ut auctor metus, nec eleifend lacus. Praesent lobortis, nulla ut
            mollis luctus, est quam convallis diam, at bibendum dolor risus quis
            velit. Duis orci justo, dictum in fringilla non, ultricies id quam.
            Quisque iaculis est lacus, in pretium urna convallis ac. Fusce eget
            feugiat justo, feugiat maximus nisl. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Proin
            suscipit rutrum lacus, ut sagittis augue pulvinar ut. Nullam
            laoreet, quam at tempor pulvinar, felis enim finibus dui, non
            ultrices felis leo a ex.
          </p>
          <div style={{ marginTop: "5%" }}>
            <h3 style={{ textAlign: "center" }}>Why Choose Us</h3>
            <FlexContainer>
              <Card
                title="Professional and trusted builders"
                imgSrc={builderPng}
              ></Card>
              <Card
                title="Best platform and fair price"
                imgSrc={pricePng}
              ></Card>
              <Card
                title="Reliable customer support"
                imgSrc={supportPng}
              ></Card>
            </FlexContainer>
          </div>
          <div style={{ marginTop: "5%" }}>
            <h3 style={{ textAlign: "center" }}>All We Provide</h3>
            <GridContainer>
              {services.map((service) => (
                <OverlayImg
                  overlayImg={service.img}
                  overlayContent={service.content}
                />
              ))}
            </GridContainer>
          </div>

          <div style={{ marginTop: "5%" }}>
            <h3 style={{ textAlign: "center" }}>Meet Our Builders</h3>
            <FlexContainer>
              {this.state.builders.map((builder) => (
                <Card
                  key={builder.id}
                  imgSrc={builder.image}
                  title={builder.builderName}
                  content={builder.email}
                />
              ))}
            </FlexContainer>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeBody;
