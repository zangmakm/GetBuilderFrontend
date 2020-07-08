import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "@material-ui/core";
import { avatar3 } from "../../../../../assets/images/avatar3.png";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
} from "@material-ui/core";

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
});

class AccountProfile extends React.Component {
  user = {
    city: "Brisbane",
    country: "Australia",
    timezone: "GMT+10",
    avatar: "../../../../../assets/images/avatar3.png",
  };

  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardContent>
          <div className={classes.details}>
            <div>
              <Typography gutterBottom variant="h2">
                {this.props.buildername}
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
              src="./avatar3.png"
              alt={avatar3}
            />
          </div>
          <div className={classes.progress}>
            <Typography variant="body1">Profile Completeness: 90%</Typography>
            <LinearProgress value={90} variant="determinate" />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.uploadButton}
            color="primary"
            variant="text"
          >
            Upload picture
          </Button>
          <Button variant="text">Remove picture</Button>
        </CardActions>
      </Card>
    );
  }
}

AccountProfile.propTypes = {
  className: PropTypes.string,
};

export default withStyles(useStyles)(AccountProfile);
