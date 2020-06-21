import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class User extends React.Component {
  render() {
    return (
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Mobile</label>
                          <Input
                            defaultValue="Mobile"
                            placeholder="Mobile"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Gender</label>
                          <Input
                            placeholder="Gender"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            defaultValue="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Last Name"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>registrationDate</label>
                          <Input
                            defaultValue="registrationDate"
                            placeholder="registrationDate"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            </Row>
        </div>
    );
  }
}

export default User;