import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";
import { convertCurrency } from "../utils/helper";
//import img from "../../logo.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: "0 auto",
    //border: `1px solid ${theme.palette.divider}`,
    //borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
  statsItem: {
    display: "flex",
    alignItems: "center",
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1),
  },
}));

const OrderCard = (props) => {
  const { className, order, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item className={classes.imageContainer} xs={7}>
            <img
              alt="Product"
              className={classes.image}
              //src={img}
              src={order.status}
            />
          </Grid>
          <Grid item xs={5}>
            <Typography align="center" variant="h2">
              {convertCurrency(order.price)}
            </Typography>
          </Grid>
        </Grid>
        {/* <Typography
          //className={classes.card_title}
          align="center"
          gutterBottom
          variant="h3"
        >
          House Building
        </Typography> */}
        <div>
          <ul>
            <li>
              <AddLocationOutlinedIcon fontSize="small" />
              <span>{order.address}</span>
            </li>
            <li>
              <DateRangeOutlinedIcon fontSize="small" />
              <span> {moment(order.postDate).format("L hh:mm A")}</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body1">
              Updated <span> {moment(order.postDate).fromNow()}</span>
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <GetAppIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body1">
              {order.status} Order
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

OrderCard.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired,
};

export default OrderCard;
