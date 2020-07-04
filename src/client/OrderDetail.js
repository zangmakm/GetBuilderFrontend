import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class OrderDetail extends React.Component {
  state = {
    storeys: 0,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    address: "",
    postDate: "",
    dueDate: "",
    price: "0",
    error: null,
    isCreating: false,
  };

  render() {
    return (
      <Fragment>
        <header>ORDER INFORMATION</header>
      </Fragment>
    );
  }
}

export default withRouter(OrderDetail);
