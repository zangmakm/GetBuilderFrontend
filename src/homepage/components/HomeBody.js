import React from "react";
import builderPng from "../assets/customer.png";
import pricePng from "../assets/price.png";
import supportPng from "../assets/technical-support.png";
import MyCard from "../../UI/Card/MyCard";
import { fetchBuilders } from "../../api/builder";
import Builders from "./Builders";
import FlexContainer from "../../UI/FlexContainer";
import { Seperator } from "../../UI/Seperator/Seperator";
import ServiceList from "../../service/ServiceList";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import CircularProgress from "@material-ui/core/CircularProgress";
import CountUp from "react-countup";
import { GiAchievement, GiAges, GiChart } from "react-icons/gi";

const centeredText = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  textTransform: "uppercase",
};

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
      <div>
        <div className="content">
          <div style={{ margin: "50px auto", width: "80%" }}>
            <h2>Builder Website</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consectetur vitae diam sollicitudin mattis. Nam sagittis dui non
              lectus feugiat accumsan. Phasellus sit amet magna ut diam pharetra
              euismod ac et enim. Proin leo elit, condimentum non bibendum in,
              feugiat sed ante. Fusce mattis scelerisque orci ut maximus.
              Maecenas ut auctor metus, nec eleifend lacus. Praesent lobortis,
              nulla ut mollis luctus, est quam convallis diam, at bibendum dolor
              risus quis velit. Duis orci justo, dictum in fringilla non,
              ultricies id quam. Quisque iaculis est lacus, in pretium urna
              convallis ac. Fusce eget feugiat justo, feugiat maximus nisl.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Proin suscipit rutrum lacus, ut
              sagittis augue pulvinar ut. Nullam laoreet, quam at tempor
              pulvinar, felis enim finibus dui, non ultrices felis leo a ex.
            </p>
          </div>
          <div style={{ marginTop: "10%" }}>
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
          <Seperator>
            <div style={centeredText}>
              <h1>your best choice of builders</h1>
              <FlexContainer>
                <h2 style={{ margin: "5px 10px" }}>
                  <GiAchievement />
                  <CountUp start={0} end={3594} duration={2} />
                </h2>
                <h2 style={{ margin: "5px 10px" }}>
                  <GiAges />
                  <CountUp start={0} end={536} duration={2} />
                </h2>
                <h2 style={{ margin: "5px 10px" }}>
                  <GiChart />
                  <CountUp start={0} end={2651} duration={2} />
                </h2>
              </FlexContainer>
            </div>
          </Seperator>
          <Builders
            builders={this.state.builders}
            loading={this.state.isLoading}
          />
          {this.state.isLoading && (
            <CircularProgress style={{ marginLeft: "50%" }} />
          )}
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomeBody;
