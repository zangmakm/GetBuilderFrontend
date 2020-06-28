import React, { Component } from "react";
import "../style/detail.scss";
import { ListGroup, Form } from "react-bootstrap";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {
  FaHome,
  FaBed,
  FaBath,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCarAlt,
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
            <FaHome />
            <Form.Label className="detail-label">
              How many storeys do you want to build?
            </Form.Label>
            <br />
            <ListGroup horizontal>
              {["1", "2", "3", "4", "5+"].map((option) => (
                <OptionList name="storeys" option={option}></OptionList>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <FaBed />
            <Form.Label className="detail-label">
              And how many bedrooms do you want?
            </Form.Label>
            <br />
            <ListGroup horizontal>
              {["1", "2", "3+"].map((option) => (
                <OptionList name="bedrooms" option={option}></OptionList>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <FaBath />
            <Form.Label className="detail-label">
              And how many bathrooms do you want?
            </Form.Label>
            <br />
            <ListGroup horizontal>
              {["1", "2"].map((option) => (
                <OptionList name="bathrooms" option={option}></OptionList>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <FaCarAlt />
            <Form.Label className="detail-label">
              And how many garages do you want?
            </Form.Label>
            <br />
            <ListGroup horizontal>
              {["1", "2"].map((option) => (
                <OptionList name="garages" option={option}></OptionList>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group>
            <FaMapMarkerAlt />
            <Form.Label className="detail-label">
              Where do you want to build your house?
            </Form.Label>
            <br />
            <Form.Control
              name="address"
              placeholder="Enter a suburb"
              custom
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <FaCalendarAlt />
            <Form.Label className="detail-label">
              When do you need it done?
            </Form.Label>
            <br />
            <TextField
              id="date"
              label="DueDate"
              type="date"
              defaultValue={new Date().toLocaleString}
              // className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Form.Group>
        </Form>
      </DetailContainer>
    );
  }
}

export default Detail;
