import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import { addOrderComment } from "../api/order";
import { CLIENT_BASE_URL } from "../routes/URLMap";

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
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  labels: {
    marginBottom: ".5rem;",
    marginLeft: "6px;",
    fontSize: "14px",
    fontWeight: "400",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  input: {
    width: "100%",
    display: "block",
    margin: "0",
    minHeight: "100px",
    borderRadius: "5px",
    border: "1px solid #c2c2c2",
    padding: "10px",
  },
  progressContainer: {
    padding: "20px 0",
    textAlign: "center",
  },
  successContainer: {
    padding: "40px 0 20px",
    textAlign: "center",
  },
});

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

class WriteOrderComment extends React.Component {
  state = {
    star: 3,
    comment: "Good!",
    hover: -1,
    isLoading: false,
    submitSuccess: false,
    error: null,
  };

  handleSubmit = () => {
    const orderComment = {
      star: this.state.star,
      comments: this.state.comment,
    };
    const orderId = this.props.match.params.orderId;
    const clientId = this.props.match.params.clientId;
    this.setState(
      {
        isLoading: true,
      },
      () => {
        addOrderComment(orderId, orderComment)
          .then(() => {
            this.setState({
              submitSuccess: true,
              isLoading: false,
            });
            this.props.handleComment(this.state.comment, this.state.star);
          })
          .catch((error) => this.setState({ error, isLoading: false }));
      }
    );
  };

  changeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  renderDialog = (classes) => {
    if (this.state.isLoading) {
      return (
        <div className={classes.progressContainer}>
          <CircularProgress size={150} color="secondary" />
        </div>
      );
    }
    if (this.state.error) {
      return <Alert severity="error">{this.state.error.toString()}</Alert>;
    }
    if (this.state.submitSuccess) {
      return (
        <div className={classes.successContainer}>
          <i className="fas fa-check-circle"></i>
          <p>Comment writed successfully.</p>
        </div>
      );
    }
    return (
      <div>
        <DialogTitle id="form-dialog-title">WRITE COMMENT</DialogTitle>
        <DialogContent>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating the order</Typography>
            <div className={classes.root}>
              <StyledRating
                name="customized-color"
                defaultValue={this.state.star}
                value={this.state.star}
                onChange={(event, newStar) => {
                  this.setState({ star: newStar });
                }}
                onChangeActive={(event, newHover) => {
                  this.setState({ hover: newHover });
                }}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                icon={<FavoriteIcon fontSize="inherit" />}
              />
              {this.state.star !== null && (
                <Box ml={2} className={classes.labels}>
                  {
                    labels[
                      this.state.hover !== -1
                        ? this.state.hover
                        : this.state.star
                    ]
                  }
                </Box>
              )}
            </div>
          </Box>
          <textarea
            placeholder="Good!"
            onChange={this.changeComment}
            value={this.state.comment}
            className={classes.input}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            SUBMIT
          </Button>
        </DialogActions>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          {this.renderDialog(classes)}
        </Dialog>
      </Fragment>
    );
  }
}

export default withRouter(withStyles(useStyles)(WriteOrderComment));
