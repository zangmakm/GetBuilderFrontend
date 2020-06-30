import React, { Component, Fragment } from "react";

import BuilderRoutes from "../routes/BuilderRoutes";

class Builder extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <BuilderRoutes />
        </div>
      </Fragment>
    );
  }
}

export default Builder;
