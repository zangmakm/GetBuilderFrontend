import React from "react";
import { withRouter } from "react-router";
import { getBuilderOrders } from "../../../../../api/builder";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";

class AllTasksNumber extends React.Component {
  state = {
    allTasksNumber: 0,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.getAllTasksNumber();
  }

  getAllTasksNumber = () => {
    this.setState({ isLoading: true }, () => {
      const builderId = this.props.match.params.builderId;
      getBuilderOrders(builderId, null, null, null)
        .then((orders) => {
          const allTasksNumber = orders.orders.length;
          this.setState({ allTasksNumber, isLoading: false });
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
      return <Typography variant="h4">{this.state.allTasksNumber}</Typography>;
    }
  }
}

export default withRouter(AllTasksNumber);
