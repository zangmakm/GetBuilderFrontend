import React from "react";
import { SERVICES } from "./data";
import { Typography, Grid, Paper, makeStyles } from "@material-ui/core";
import TopNav from "../navigation/TopNav";
import { Link, useHistory } from "react-router-dom";

const getDataById = (id) => {
  return SERVICES.find((e) => e.id === id);
};

const useStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    backgroundImage: "url(https://source.unsplash.com/random)",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "300px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  headerContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  sideBarImg: {
    maxWidth: "400px",
    overflow: "hidden",
    padding: theme.spacing(2),
  },
  main: {
    padding: theme.spacing(3),
  },
}));

const ServiceInfo = (props) => {
  const serviceId = props.match.params.id;
  const service = getDataById(serviceId);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TopNav />
      <Paper className={classes.header}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={service.image} />}
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.headerContent}>
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                gutterBottom
              >
                {service.content}
              </Typography>
              "Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what's most interesting in this
              post's contents."
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid container>
        <Grid item md={7} className={classes.main}>
          <Typography variant="h3">{service.content}</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            purus et enim vehicula pulvinar. Donec ultricies interdum velit, et
            pretium metus mollis vel. Nullam ac sagittis nisi. Suspendisse sit
            amet libero ex. Phasellus blandit elementum purus at mollis.
            Pellentesque sit amet congue enim, non sollicitudin ipsum. Nulla
            facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography paragraph>
            Praesent placerat tempor tortor, nec ullamcorper risus suscipit
            sagittis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Sed ut quam ut urna tincidunt sodales. Phasellus non nibh
            bibendum, porttitor augue ac, posuere nibh. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Nullam a varius nulla, vitae
            vestibulum turpis. Suspendisse potenti. Suspendisse odio enim,
            elementum sed cursus auctor, lobortis vel mauris. Aenean interdum
            congue metus ut facilisis. Proin tempor dui nec purus cursus, ac
            scelerisque nibh euismod.
          </Typography>
        </Grid>
        <Grid item md={3}>
          <img src={service.img} className={classes.sideBarImg} />
        </Grid>
      </Grid>
      <Link
        to={
          parseInt(serviceId) - 1 > 0
            ? `/service/${parseInt(serviceId) - 1}`
            : `/service/${serviceId}`
        }
        style={{ float: "left", fontSize: "20px", padding: "0 10px" }}
      >
        Before
      </Link>
      <Link
        to={
          parseInt(serviceId) + 1 <= SERVICES.length
            ? `/service/${parseInt(serviceId) + 1}`
            : `/service/${serviceId}`
        }
        style={{ float: "right", fontSize: "20px", padding: "0 10px" }}
      >
        Next
      </Link>
    </React.Fragment>
  );
};

export default ServiceInfo;
