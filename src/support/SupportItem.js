import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      cursor: "pointer",
    },
  },
}));

export default function SupportItem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} component={Link} to="/signin">
      <Paper className={classes.paper}>{props.label}</Paper>
    </Grid>
  );
}
