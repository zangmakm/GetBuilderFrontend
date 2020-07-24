import React from "react";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core";
import { AccountProfile, AccountDetails } from "./components";
import { getBuilder } from "../../../api/builder";

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
    builderName: "",
    builderPhoto: "",
    ABNNumber: "",
    email: "",
    telephoneNumber: "",
    address: "",
    postcode: "",
    description: "",
    error: null,
    isLoading: false,
  };
  componentDidMount() {
    this.defaultProfile();
  }

  defaultProfile = () => {
    const builderId = this.props.match.params.builderId;

    this.setState({ isLoading: true }, () => {
      getBuilder(builderId)
        .then((data) => {
          this.setState({
            builderName: data.builderName,
            builderPhoto: data.photo,
            ABNNumber: data.abn,
            email: data.email,
            telephoneNumber: data.mobile,
            address: data.address,
            postcode: data.postcode,
            description: data.description,
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
                buildername={this.state.builderName}
                builderphoto={this.state.builderPhoto}
              />
            </Grid>
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <AccountDetails state={this.state} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(Account);
