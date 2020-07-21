import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Linkr from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { BUILDER_BASE_URL } from "../../../routes/URLMap";
import { signup as signupFn } from "../../../api/auth";
import { createBuilder } from "../../../api/builder";
import TopNav from "../../../navigation/TopNav";
import {
  setToken,
  setBuilderId,
  removeBuilderId,
  removeClientId,
} from "../../../utils/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Linkr color="inherit" href="#">
        Get Builders APP
      </Linkr>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = (theme) => ({
  container: {
    paddingTop: "10vh",
    height: "100vh",
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignupBuilder extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    builderName: "",
    address: "",
    postcode: "",
    telephoneNumber: "",
    ABNNumber: "",
    error: null,
    isLoading: false,
  };

  handleSubmit = () => {
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
      role: "builder",
    };

    let builderInfo = {
      userId: null,
      abn: this.state.ABNNumber,
      builderName: this.state.builderName,
      mobile: this.state.telephoneNumber,
      email: this.state.email,
      address: this.state.address,
      postcode: this.state.postcode,
    };

    this.setState({ isLoading: true }, () => {
      signupFn(userInfo)
        .then((data) => {
          setToken(data.token);
          builderInfo.userId = data.userId;
        })
        .then(() => {
          createBuilder(builderInfo)
            .then((data) => {
              this.setState({ isLoading: false }, () => {
                removeClientId();
                removeBuilderId();
                const builderId = data._id;
                setBuilderId(builderId);
                const redirectTo = `${BUILDER_BASE_URL}/${builderId}`;
                this.props.history.replace(redirectTo);
              });
            })
            .catch((error) =>
              this.setState({
                error: error.response.data.error,
                isLoading: false,
              })
            );
        })
        .catch((error) =>
          this.setState({ error: error.response.data.error, isLoading: false })
        );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <TopNav />
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              BUILDER SIGN UP
            </Typography>
            <ValidatorForm
              className={classes.form}
              instantValidate={false}
              onSubmit={this.handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    label="User Name"
                    value={this.state.username}
                    onChange={(event) =>
                      this.setState({
                        username: event.target.value,
                      })
                    }
                    validators={["required", "minStringLength: 2"]}
                    errorMessages={[
                      "this field is required",
                      "username must be at least two characters",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    color="primary"
                    variant="outlined"
                    fullWidth
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={(event) =>
                      this.setState({
                        email: event.target.value,
                      })
                    }
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "this field is required",
                      "email is not valid",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    color="primary"
                    variant="outlined"
                    fullWidth
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({
                        password: event.target.value,
                      })
                    }
                    validators={["required", "minStringLength: 2"]}
                    errorMessages={[
                      "this field is required",
                      "password must be at least two characters",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    label="Builder Name"
                    value={this.state.builderName}
                    onChange={(event) =>
                      this.setState({
                        builderName: event.target.value,
                      })
                    }
                    validators={["required", "minStringLength:2"]}
                    errorMessages={[
                      "this field is required",
                      "The length must longer than 2",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    label="Address"
                    value={this.state.address}
                    onChange={(event) =>
                      this.setState({
                        address: event.target.value,
                      })
                    }
                    validators={["required"]}
                    errorMessages={["this field is required"]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    color="primary"
                    variant="outlined"
                    fullWidth
                    label="Postcode"
                    value={this.state.postcode}
                    onChange={(event) =>
                      this.setState({
                        postcode: event.target.value,
                      })
                    }
                    validators={["required", "matchRegexp:^[0-9]{4}$"]}
                    errorMessages={[
                      "this field is required",
                      "postcode is not valid",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    label="Telephone Number"
                    value={this.state.telephoneNumber}
                    onChange={(event) =>
                      this.setState({
                        telephoneNumber: event.target.value,
                      })
                    }
                    validators={["required", "matchRegexp:^[0-9]{10}$"]}
                    errorMessages={[
                      "this field is required",
                      "phone number is not valid",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    label="ABN Number"
                    value={this.state.ABNNumber}
                    onChange={(event) =>
                      this.setState({
                        ABNNumber: event.target.value,
                      })
                    }
                    validators={["required", "matchRegexp:^[0-9]{11}$"]}
                    errorMessages={[
                      "this field is required",
                      "ABN is not valid",
                    ]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              {!this.state.isLoading && !!this.state.error && (
                <Alert severity="error">{this.state.error}</Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  Already have an account?
                  <Link to="/signin">Sign in.</Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(SignupBuilder);
