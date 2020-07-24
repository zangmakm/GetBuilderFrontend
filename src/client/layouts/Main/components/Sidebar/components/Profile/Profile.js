import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import { Avatar, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";
import { CLIENT_BASE_URL } from "../../../../../../../routes/URLMap";
import { getClient } from "../../../../../../../api/client";

const useStyles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  progressContainer: {
    textAlign: "center",
    marginLeft: "40%",
    color: "black",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    marginTop: theme.spacing(1),
  },
});

class Profile extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    clientPhoto: "",
    error: null,
    isLoading: false,
  };
  componentDidMount() {
    this.defaultProfile();
  }

  defaultProfile = () => {
    const clientId = this.props.match.params.clientId;
    this.setState({ isLoading: true });
    getClient(clientId)
      .then((data) => {
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          clientPhoto: data.photo,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  render() {
    const { classes } = this.props;
    const { clientId, className, ...rest } = this.props;
    if (this.state.isLoading) {
      return (
        <div>
          <CircularProgress
            className={classes.progressContainer}
            size={50}
            color="secondary"
          />
        </div>
      );
    }
    if (this.state.error) {
      return <Alert severity="error">{this.state.error}</Alert>;
    }
    return (
      <div {...rest} className={clsx(classes.root, className)}>
        <Avatar
          alt="Client"
          className={classes.avatar}
          component={RouterLink}
          src={this.state.clientPhoto}
          to={`${CLIENT_BASE_URL}/${clientId}/settings`}
        />
        <Typography className={classes.name} variant="h4">
          {`${this.state.firstName} ${this.state.lastName}`}
        </Typography>
      </div>
    );
  }
}

Profile.propTypes = {
  className: PropTypes.string,
};

export default withRouter(withStyles(useStyles)(Profile));
