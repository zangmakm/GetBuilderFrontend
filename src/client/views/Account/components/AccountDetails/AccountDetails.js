import React from "react";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import { withRouter } from "react-router";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { updateClient } from "../../../../../api/client";
import { withStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";

const useStyles = (theme) => ({
  root: {},

  radioGroup: {
    flexDirection: "row",
  },
});

class AccountDetails extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    mobile: "",
    email: "",
    postcode: "",
    error: null,
    buttonDisabled: false,
  };

  componentDidMount() {
    this.setState({
      firstName: this.props.client.firstName || "",
      lastName: this.props.client.lastName || "",
      gender: this.props.client.gender || "",
      mobile: this.props.client.mobile || "",
      email: this.props.client.email || "",
      postcode: this.props.client.postcode || "",
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const clientId = this.props.match.params.clientId;
    const client = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      mobile: this.state.mobile,
      email: this.state.email,
      postcode: this.state.postcode,
    };

    this.setState({ error: null, buttonDisabled: true }, () => {
      updateClient(clientId, client)
        .then(() => {
          this.setState(
            {
              buttonDisabled: false,
            },
            () => {
              window.location.reload();
            }
          );
        })
        .catch((error) => this.setState({ error, buttonDisabled: false }));
    });
  };

  render() {
    //const { className, ...rest } = this.props;
    const { classes } = this.props;
    return (
      <Card>
        <ValidatorForm instantValidate={false} onSubmit={this.handleSubmit}>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextValidator
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  validators={["required", "minStringLength:2"]}
                  errorMessages={[
                    "this field is required",
                    "The length must longer than 2",
                  ]}
                  autoFocus
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  validators={["required", "minStringLength:2"]}
                  errorMessages={[
                    "this field is required",
                    "The length must longer than 2",
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
              <Grid item md={6} xs={12}>
                <TextValidator
                  color="primary"
                  variant="outlined"
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  variant="outlined"
                  fullWidth
                  name="mobile"
                  label="Contact Number"
                  value={this.state.mobile}
                  onChange={this.handleChange}
                  validators={["required", "matchRegexp:^[0-9]{10}$"]}
                  errorMessages={[
                    "this field is required",
                    "phone number is not valid",
                  ]}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextValidator
                  color="primary"
                  variant="outlined"
                  fullWidth
                  name="postcode"
                  label="Current Residential Postcode"
                  value={this.state.postcode}
                  onChange={this.handleChange}
                  validators={["required", "matchRegexp:^[0-9]{4}$"]}
                  errorMessages={[
                    "this field is required",
                    "postcode is not valid",
                  ]}
                />
              </Grid>
            </Grid>
            {this.state.error && (
              <Alert severity="error">Update Profile Failed !</Alert>
            )}
          </CardContent>
          <Divider />
          <CardActions>
            {this.state.buttonDisabled ? (
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled
              >
                Update Profile
              </Button>
            ) : (
              <Button type="submit" color="primary" variant="contained">
                Update Profile
              </Button>
            )}
          </CardActions>
        </ValidatorForm>
      </Card>
    );
  }
}

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default withRouter(withStyles(useStyles)(AccountDetails));
