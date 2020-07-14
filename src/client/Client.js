import React, { Component, Fragment } from "react";
import "./theme/scss/index.scss";
import ClientRoutes from "../routes/ClientRoutes";

class Client extends Component {
  render() {
    return (
      <Fragment>
        <div id="client_body">
          <ClientRoutes />
        </div>
      </Fragment>
    );
  }
}

export default Client;
