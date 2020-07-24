import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);

const useStyles = makeStyles(() => ({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
    marginTop: "5px",
  },
  client: {
    display: "inline-flex",
    alignItems: "center",
  },
  clientPic: {
    margin: "0 20px",
  },
  clientInfo: {
    marginLeft: "15px",
    textTransform: "uppercase",
  },
  fieldset: {
    display: "flex",
    marginBottom: "0",
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
}));

const labels = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const ShowOrderComment = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Dialog
        open={props.open}
        onClose={props.closeComment}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ORDER COMMENT</DialogTitle>
        <DialogContent>
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            className={classes.fieldset}
          >
            <div className={classes.client}>
              <Avatar
                className={classes.lientPic}
                alt="clientPic"
                src={props.clientPhoto}
                size="small"
              />
              <Typography className={classes.clientInfo}>Client:</Typography>
              <Typography className={classes.clientInfo}>
                {props.clientName}
              </Typography>
            </div>

            <div className={classes.root}>
              <StyledRating
                disabled
                name="customized-color"
                defaultValue={props.star}
                value={props.star}
                getLabelText={(value) =>
                  `${value} Heart${value !== 1 ? "s" : ""}`
                }
                icon={<FavoriteIcon fontSize="inherit" />}
              />
              {props.star !== null && (
                <Box ml={2} className={classes.labels}>
                  {labels[props.star]}
                </Box>
              )}
            </div>
          </Box>
          <textarea value={props.comment} className={classes.input} disabled />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeComment} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ShowOrderComment;
