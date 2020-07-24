import React from "react";
import { withRouter } from "react-router";
import { getClientOrders } from "../../../../../api/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

class AssignedTasksNumber extends React.Component {
  state = {
    assignedTasksNumber: 0,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.getAssignedTasksNumber();
  }

  getAssignedTasksNumber = () => {
    this.setState({ isLoading: true }, () => {
      const clientId = this.props.match.params.clientId;
      getClientOrders(clientId, null, null, "ASSIGNED")
        .then((orders) => {
          const assignedTasksNumber = orders.orders.length;
          this.setState({ assignedTasksNumber, isLoading: false });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  render() {
    if (this.state.error) {
      return <Typography variant="body1">error</Typography>;
    } else if (this.state.isLoading) {
      return (
        <div>
          <CircularProgress disableShrink size={30} color="inherit" />
        </div>
      );
    } else {
      return (
        <Typography variant="h4">{this.state.assignedTasksNumber}</Typography>
      );
    }
  }
}

export default withRouter(AssignedTasksNumber);
