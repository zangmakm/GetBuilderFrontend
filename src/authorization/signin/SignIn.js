import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Linkr from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import TopNav from "../../navigation/TopNav";
import {
  setToken,
  getTokenRole,
  setClientId,
  setBuilderId,
  removeClientId,
  removeBuilderId,
} from "../../utils/auth";
import { login as loginFn } from "../../api/auth";

const useStyles = (theme) => ({
  container: {
    paddingTop: "10vh",
    height: "90vh",
  },
  paper: {
    marginTop: theme.spacing(2),
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

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Linkr color="inherit" href="#">
        Get your Builder
      </Linkr>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
    error: null,
    isLoading: false,
  };

  validateForm = () => {
    if (this.state.username === "" || this.state.password === "") return true;
  };

  loginInitialSetup = (data) => {
    setToken(data.token);
    removeClientId();
    removeBuilderId();
  };

  clientLogin = (data) => {
    setClientId(data.clientId);
    const locationState = this.props.location.state;
    const redirectTo =
      (locationState && locationState.from) || `clients/${data.clientId}`;
    this.props.history.replace(redirectTo);
  };

  builderLogin = (data) => {
    setBuilderId(data.builderId);

    const locationState = this.props.location.state;
    const redirectTo =
      (locationState && locationState.from) || `builders/${data.builderId}`;
    this.props.history.replace(redirectTo);
  };

  login = () => {
    const loginInfo = {
      username: this.state.username,
      password: this.state.password,
    };

    if (this.validateForm()) {
      this.setState({
        error: "UserName and password are required",
        isLoading: false,
      });
      return;
    }

    this.setState({ error: null, isLoading: true }, () => {
      loginFn(loginInfo)
        .then((data) => {
          this.setState({ isLoading: false }, () => {
            this.loginInitialSetup(data);
            if (getTokenRole() === "client") {
              this.clientLogin(data);
            } else if (getTokenRole() === "builder") {
              this.builderLogin(data);
            } else {
              this.props.history.replace("/signin");
            }
          });
        })
        .catch((error) =>
          this.setState({ error: error.toString(), isLoading: false })
        );
    });
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
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
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {!!this.state.error && (
                <Alert variant="outlined" severity="error">
                  Invalidate username or password. <br />
                </Alert>
              )}
              {this.state.isLoading && (
                <LinearProgress className={classes.root} />
              )}
              <Button
                disabled={this.state.isLoading}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.login}
              >
                Sign In
              </Button>
              <Grid container>
                Not sign up?
                <Grid item>
                  <Link
                    variant="body2"
                    to={{
                      pathname: "/signup/user/client",
                      role: "client",
                    }}
                  >
                    Create a client account.
                  </Link>
                </Grid>
              </Grid>
              <Grid container>
                OR
                <Grid item>
                  <Link
                    variant="body2"
                    to={{
                      pathname: "/signup/user/builder",
                      role: "builder",
                    }}
                  >
                    Create a builder account.
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(useStyles)(SignIn);
