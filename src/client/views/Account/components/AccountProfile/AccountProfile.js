import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { updateAvatar } from "../../../../../api/client";

const useStyles = (theme) => ({
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    marginRight: theme.spacing(2),
  },
  uploadInput: {
    fontSize: "14px",
  },
});

class AccountProfile extends React.Component {
  user = {
    city: "Brisbane",
    country: "Australia",
    timezone: "GMT+10",
  };

  state = {
    avatar: null,
    isUploading: false,
    uploadError: "",
  };

  uploadAvatar = () => {
    const clientId = this.props.clientId;
    const avatar = this.state.avatar;
    const data = new FormData();
    data.append("avatar", avatar);
    this.setState({ isUploading: true }, () => {
      updateAvatar(clientId, data)
        .then(() => {
          this.setState(
            {
              isUploading: false,
            },
            () => window.location.reload()
          );
        })
        .catch((error) =>
          this.setState({ uploadError: error, isUploading: false })
        );
    });
  };

  changeFile = (event) => {
    const file = event.target.files[0];
    this.setState({ avatar: file });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h2">
                {this.props.clientname}
              </Typography>
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1"
              >
                {this.user.city}, {this.user.country}
              </Typography>
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1"
              >
                {moment().format("hh:mm A")} ({this.user.timezone})
              </Typography>
            </div>
            <Avatar
              className={classes.avatar}
              src={this.props.clientphoto}
              alt="Client"
            />
          </div>
          <div className={classes.progress}>
            <Typography variant="body1">Profile Completeness: 90%</Typography>
            <LinearProgress value={90} variant="determinate" />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <input
                className={classes.uploadInput}
                type="file"
                name="avatar"
                onChange={this.changeFile}
              />
            </Grid>
            <Grid item xs={12}>
              {this.state.isUploading ? (
                <LinearProgress />
              ) : (
                <Button
                  className={classes.uploadButton}
                  variant="contained"
                  onClick={this.uploadAvatar}
                  color="primary"
                >
                  Upload avatar
                </Button>
              )}

              {this.state.uploadError && (
                <Alert severity="error" className="account__form--error">
                  Upload fail, please try again.
                </Alert>
              )}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
};

export default withStyles(useStyles)(AccountProfile);
