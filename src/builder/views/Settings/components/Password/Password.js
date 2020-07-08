import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core";
import { changePassword } from "../../../../../api/auth";
import { getTokenUserId } from "../../../../../utils/auth";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField,
  LinearProgress,
  CircularProgress,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

const useStyles = (theme) => ({
  root: {},
  loading: {
    margin: theme.spacing(2, 0),
  },
});

class Password extends React.Component {
  state = {
    oldPassword: "",
    newPassword: "",
    doublePassword: "",
    isLoading: false,
    error: null,
    isFinished: false,
    errorMessage: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const passwordInfo = {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
      doublePassword: this.state.doublePassword,
    };

    const userId = getTokenUserId();

    this.setState({ isFinished: false, isLoading: true, error: null }, () => {
      //   getUserId()
      //     .then((userID) => {
      changePassword(userId, passwordInfo)
        .then(() => {
          this.setState({
            isLoading: false,
            isFinished: true,
          });
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            error,
            isLoading: false,
            errorMessage: error.toString(),
          });
        });
      // })
      // .catch((error) => this.setValues({ error, isLoading: false }));
    });
  };

  render() {
    const { className, ...rest } = this.props;

    const { classes } = this.props;
    return (
      <Card {...rest} className={className}>
        <form>
          <CardHeader subheader="Update password" title="Password" />
          <Divider />
          <CardContent>
            <TextField
              variant="outlined"
              required
              label="Old Password"
              name="oldPassword"
              fullWidth
              value={this.state.oldPassword}
              onChange={this.handleChange}
            />
            <TextField
              fullWidth
              required
              label="New Password"
              name="newPassword"
              onChange={this.handleChange}
              style={{ marginTop: "1rem" }}
              value={this.state.newPassword}
              variant="outlined"
            />
            <TextField
              fullWidth
              required
              label="Confirm password"
              name="doublePassword"
              onChange={this.handleChange}
              style={{ marginTop: "1rem" }}
              value={this.state.doublePassword}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <CardActions>
            {this.state.isLoading ? (
              <CircularProgress color="secondary" className={classes.loading} />
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={this.handleSubmit}
              >
                Update
              </Button>
            )}
            {this.state.isFinished && (
              <Alert severity="info"> Successful</Alert>
            )}
            {!!this.state.error && (
              <Alert severity="error">{this.state.errorMessage}</Alert>
            )}
          </CardActions>
        </form>
      </Card>
    );
  }
}

Password.propTypes = {
  className: PropTypes.string,
};

export default withStyles(useStyles)(Password);
