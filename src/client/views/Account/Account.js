import React from "react";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core";
import { AccountProfile, AccountDetails } from "./components";
import { getClient } from "../../../api/client";

const useStyles = (theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(30),
  },
});

class Account extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    mobile: "",
    email: "",
    postcode: "",
    clientPhoto: "",
    error: null,
    isLoading: false,
  };
  componentDidMount() {
    this.defaultProfile();
  }

  defaultProfile = () => {
    const clientId = this.props.match.params.clientId;
    this.setState({ isLoading: true }, () => {
      getClient(clientId)
        .then((data) => {
          this.setState({
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            mobile: data.mobile,
            email: data.email,
            postcode: data.postcode,
            clientPhoto: data.photo,
            isLoading: false,
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.isLoading) {
      return (
        <div className={classes.loading}>
          <CircularProgress size={150} color="secondary" />
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <AccountProfile
                clientname={`${this.state.firstName} ${this.state.lastName}`}
                clientphoto={this.state.clientPhoto}
              />
            </Grid>
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <AccountDetails client={this.state} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(Account);
