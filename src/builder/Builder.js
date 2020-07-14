import React, { Component, Fragment } from "react";
import "./theme/scss/index.scss";
import BuilderRoutes from "../routes/BuilderRoutes";

class Builder extends Component {
  render() {
    return (
      <Fragment>
        <div id="builder_body">
          <BuilderRoutes />
        </div>
      </Fragment>
    );
  }
}

export default Builder;
