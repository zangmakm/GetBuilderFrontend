import React, { Component } from "react";
import "../style/detail.scss";
import { ListGroup, Form } from "react-bootstrap";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaCalendarAlt,
  FaColumns,
} from "react-icons/fa";
import OptionList from "./OptionList";

const DetailContainer = styled.div`
  margin: 0 10%;
`;

class Detail extends Component {
  render() {
    return (
      <DetailContainer>
        <Form>
          <h3>See how little it could cost...</h3>
          <Form.Group>
            <FaBed />
            <Form.Label className="detail-label">
              How many bedrooms do you have?
            </Form.Label>
            <br />
            <ListGroup horizontal>
              {["1", "2", "3", "4", "5+"].map((option) => (
                <OptionList option={option}></OptionList>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <FaBath />
            <Form.Label className="detail-label">
              And how many bedrooms do you have?
            </Form.Label>
            <br />
            <ListGroup horizontal>
              {["1", "2", "3+"].map((option) => (
                <OptionList option={option}></OptionList>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <FaColumns />
            <Form.Label className="detail-label">
              Do you need any of these cleaned?
            </Form.Label>
            <br />
            <Form.Check inline label="Oven" type="checkbox"></Form.Check>
            <Form.Check inline label="Carbinets" type="checkbox"></Form.Check>
            <Form.Check inline label="Windows" type="checkbox"></Form.Check>
            <Form.Check
              inline
              label="Carpet Steam"
              type="checkbox"
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <FaMapMarkerAlt />
            <Form.Label className="detail-label">
              Where do you need the cleaning?
            </Form.Label>
            <br />
            <Form.Control placeholder="Enter a suburb" custom></Form.Control>
          </Form.Group>
          <Form.Group>
            <FaCalendarAlt />
            <Form.Label className="detail-label">
              When do you need it done?
            </Form.Label>
            <br />
            <Form.Check inline label="Today" type="radio"></Form.Check>
            <Form.Check
              inline
              label="By a sertain day"
              type="radio"
            ></Form.Check>
            <Form.Check inline label="Within 1 week" type="radio"></Form.Check>
          </Form.Group>
        </Form>
      </DetailContainer>
    );
  }
}

export default Detail;
