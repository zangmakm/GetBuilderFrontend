import React from "react";
import { Modal, Button } from "react-bootstrap";
import { MdRoom, MdSettingsPhone, MdComment, MdMail } from "react-icons/md";

const VerticallyCenteredmodal = (props) => {
  if (props.builder) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.builder.builderName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <container>
            <img src={props.builder.image} style={{ maxWidth: "200px" }} />
            <p>
              ABN <span style={{ color: "blue" }}>{props.builder.abn}</span>
            </p>
            <hr />
            <p>
              <MdRoom />
              address: {props.builder.address}
            </p>
            <p>
              <MdMail />
              email: {props.builder.email}
            </p>
            <p>
              <MdSettingsPhone />
              mobile: {props.builder.mobile}
            </p>
            <hr />
            <p>postcode: {props.builder.postcode}</p>
            <hr />
            <h3>About Business</h3>
            <p>{props.builder.description}</p>
            <hr />

            {props.builder.comments.map((comment) => (
              <p>
                <MdComment />
                {comment.comment} from {comment.clientName}
              </p>
            ))}
          </container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return <Modal />;
  }
};

export default VerticallyCenteredmodal;
