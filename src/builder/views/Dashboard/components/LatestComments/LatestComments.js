import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Alert from "@material-ui/lab/Alert";
import Rating from "@material-ui/lab/Rating";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { getBuilder } from "../../../../../api/builder";
import { getBuilderId } from "../../../../../utils/auth";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const useStyles = () => ({
  root: {
    height: "100%",
  },
  content: {
    padding: 0,
  },
  image: {
    height: 48,
    width: 48,
  },
  actions: {
    justifyContent: "flex-end",
  },
});

class LatestComments extends React.Component {
  state = {
    comments: [],
    star: 0,
    comment: "",
    clientName: "",
    clientPhoto: "",
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.getLatestComment();
  }

  getLatestComment = () => {
    this.setState({ isLoading: true }, () => {
      const builderId = getBuilderId();
      getBuilder(builderId)
        .then((builder) => {
          this.setState({
            comments: builder.comments,
            star: builder.comments[0].star,
            comment: builder.comments[0].comment,
            clientName: builder.comments[0].clientName,
            clientPhoto: builder.comments[0].clientPhoto,
            isLoading: false,
          });
        })
        .catch((error) => this.setState({ error, isLoading: false }));
    });
  };

  render() {
    const { className, ...rest } = this.props;
    const { classes } = this.props;
    if (this.state.isLoading) {
      return (
        <div className={classes.root}>
          <CircularProgress size={50} color="secondary" />
        </div>
      );
    }
    if (this.state.error) {
      return <Alert severity="error">{this.state.error.toString()}</Alert>;
    }
    if (this.state.comments.length === 0) {
      return <p>You have no comment yet</p>;
    }
    return (
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardHeader
          //subtitle={`${products.length} in total`}
          title="Latest comments"
        />
        <Divider />

        <CardContent className={classes.content}>
          {this.state.comments.length === 0 ? (
            <p>You have no comment yet</p>
          ) : (
            <List>
              <ListItem key={this.state.star}>
                <ListItemAvatar>
                  <img
                    alt="client"
                    className={classes.image}
                    src="https://www.lightningdesignsystem.com/assets/images/avatar2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={this.state.clientName}
                  //secondary={`Updated ${product.updatedAt.fromNow()}`}
                />
                <ListItemText
                  primary={this.state.comment}
                  //secondary={`Updated ${product.updatedAt.fromNow()}`}
                />
                <ListItemIcon>
                  <StyledRating
                    disabled
                    name="customized-color"
                    defaultValue={this.state.star}
                    value={this.state.star}
                    getLabelText={(value) =>
                      `${value} Heart${value !== 1 ? "s" : ""}`
                    }
                    icon={<FavoriteIcon fontSize="inherit" />}
                  />
                </ListItemIcon>

                <IconButton edge="end" size="small">
                  <MoreVertIcon />
                </IconButton>
              </ListItem>
            </List>
          )}
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <Button color="primary" size="small" variant="text">
            View all <ArrowRightIcon />
          </Button>
        </CardActions>
      </Card>
    );
  }
}

LatestComments.propTypes = {
  className: PropTypes.string,
};

export default withStyles(useStyles)(LatestComments);
