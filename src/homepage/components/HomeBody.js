import React from "react";
import builderPng from "../assets/customer.png";
import pricePng from "../assets/price.png";
import supportPng from "../assets/technical-support.png";
import MyCard from "../../UI/Card/MyCard";
import { fetchBuilders } from "../../api/builders";
import Builders from "../../builders/Builders";
import FlexContainer from "../../UI/FlexContainer";
import ServiceList from "../../service/ServiceList";

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
              <MyCard
                title="Professional and trusted builders"
                imgSrc={builderPng}
                content="Broomer has the largest amount and the most professional cleaners in Australia. Best service and experiences guaranteed."
              ></MyCard>
              <MyCard
                title="Best platform and fair price"
                imgSrc={pricePng}
                content="You can use our mobile app or website to book cleaners and also track the process of your orders. Best price guaranteed."
              ></MyCard>
              <MyCard
                title="Reliable customer support"
                imgSrc={supportPng}
                content="Our customer service team is ready to help you with any inquiries you have during office hours, Monday-Friday."
              ></MyCard>
            </FlexContainer>
          </div>
          <ServiceList />

          <Builders builders={this.state.builders} />
        </div>
      </section>
    );
  }
}

export default HomeBody;
