import React from "react";
import { Card, Button } from "react-bootstrap";
import FlexContainer from "../../UI/FlexContainer";
import VerticallyCenteredmodal from "../../UI/VerticallyCenteredmodal";

const avatarStyle = {
  verticalAlign: "middle",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  margin: "0 auto",
};

class Builders extends React.Component {
  state = {
    modalShow: false,
    currentId: 0,
  };

  render() {
    return (
      <div style={{ marginTop: "10%" }}>
        <h3 style={{ textAlign: "center" }}>Meet Our Builders</h3>
        <FlexContainer>
          {this.props.builders.map((builder) => (
            <Card key={builder._id} style={{ width: "15rem", margin: "10px" }}>
              <Card.Img variant="top" src={builder.image} style={avatarStyle} />
              <Card.Body>
                <Card.Title>{builder.builderName}</Card.Title>
                <Card.Text>{builder.email}</Card.Text>
                <Button
                  onClick={() =>
                    this.setState({ modalShow: true, currentId: builder._id })
                  }
                  variant="primary"
                >
                  Find More
                </Button>
              </Card.Body>
            </Card>
          ))}
        </FlexContainer>
        <VerticallyCenteredmodal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          builder={this.props.builders.find(
            (item) => item._id === this.state.currentId
          )}
        />
      </div>
    );
  }
}

export default Builders;
