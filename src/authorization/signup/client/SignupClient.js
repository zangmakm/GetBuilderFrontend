import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Checkbox from "@material-ui/core/Checkbox";
import Linkr from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { CLIENT_BASE_URL } from "../../../routes/URLMap";
import { signup as signupFn } from "../../../api/auth";
import { createClient } from "../../../api/client";
import TopNav from "../../../navigation/TopNav";
import {
  setToken,
  setClientId,
  removeBuilderId,
  removeClientId,
} from "../../../utils/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Linkr color="inherit" href="https://material-ui.com/">
        Your Website
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
  loading: {
    margin: theme.spacing(2, 0),
  },
  radioGroup: {
    flexDirection: "row",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignupClient extends React.Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "female",
    mobile: "",
    email: "",
    postcode: "",
    error: null,
    isLoading: false,
  };

  handleChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleSubmit = () => {
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
      role: "client",
    };

    let clientInfo = {
      userId: null,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      mobile: this.state.mobile,
      email: this.state.email,
      postcode: this.state.postcode,
    };

    this.setState({ isLoading: true }, () => {
      signupFn(userInfo)
        .then((data) => {
          setToken(data.token);
          clientInfo.userId = data.userId;
        })
        .then(() => {
          createClient(clientInfo)
            .then((data) => {
              this.setState({ isLoading: false }, () => {
                removeClientId();
                removeBuilderId();
                const clientId = data._id;
                setClientId(clientId);
                const redirectTo = `${CLIENT_BASE_URL}/${clientId}`;
                this.props.history.replace(redirectTo);
              });
            })
            .catch((error) =>
              this.setState({ error: error.toString(), isLoading: false })
            );
        })
        .catch((error) =>
          this.setState({ error: error.toString(), isLoading: false })
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
              CLIENT SIGN UP
            </Typography>
            <ValidatorForm
              className={classes.form}
              instantValidate={false}
              onSubmit={this.handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={(event) =>
                      this.setState({
                        firstName: event.target.value,
                      })
                    }
                    validators={["required", "minStringLength:2"]}
                    errorMessages={[
                      "this field is required",
                      "The length must longer than 2",
                    ]}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextValidator
                    variant="outlined"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    value={this.state.lastName}
                    onChange={(event) =>
                      this.setState({
                        lastName: event.target.value,
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
                  <RadioGroup
                    className={classes.radioGroup}
                    aria-label="gender"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Female"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Male"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio color="primary" />}
                      label="Other"
                      labelPlacement="end"
                    />
                  </RadioGroup>
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
                    variant="outlined"
                    fullWidth
                    label="Telephone Number"
                    value={this.state.mobile}
                    onChange={(event) =>
                      this.setState({
                        mobile: event.target.value,
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
                    color="primary"
                    variant="outlined"
                    fullWidth
                    label="postcode"
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
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
                {!this.state.isLoading && !!this.state.error && (
                  <Alert severity="error">{this.state.error}</Alert>
                )}
              </Grid>
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

export default withStyles(useStyles)(SignupClient);
