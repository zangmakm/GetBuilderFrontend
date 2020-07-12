import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import SupportItem from "./SupportItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: theme.spacing(4, 0, 2, 0),
  },
  container: {
    padding: theme.spacing(2, 6, 2, 6),
  },
}));

const supportGroup = [
  "Home Building",
  "Home ReBuild",
  "Other building services",
  "Client Dashboard",
  "Client Account",
  "Order - Client Side",
  "Client Notification",
  "Browse All orders",
  "Builder Profile",
  "Browse All Builders",
];

export default function SupportContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        align="center"
        color="primary"
        className={classes.title}
      >
        How can we help?
      </Typography>
      <Grid container spacing={3} className={classes.container}>
        {supportGroup.map((item) => (
          <SupportItem label={item} />
        ))}
      </Grid>
    </div>
  );
}
