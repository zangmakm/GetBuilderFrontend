import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";
import { convertCurrency, getStatusText } from "../utils/helper";
import { NEW_ORDER, ASSIGNED, COMPLETED } from "../utils/variables";
import palette from "../builder/theme/palette";
//import img from "../../logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "20px",
    padding: " 0px 20px",
    borderTop: "5px solid",
    borderTopColor: (props) => getCardColor(props.status),
  },
  avatar: {
    marginBottom: "10px",
  },
  statsItem: {
    display: "flex",
    alignItems: "center",
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1),
  },
  statsIconActive: {
    backgroundColor: (props) => getCardColor(props.status),
    color: "white",
    borderRadius: "5px",
  },
  orderCardList: {
    listStyle: "none",
    padding: " 0",
    fontSize: "15px",
    marginBottom: "0",
  },
  orderCardListLi: {
    lineHeight: "24px",
    display: "flex",
    marginBottom: "5px",
  },
}));

const getCardColor = (status) => {
  switch (status) {
    case NEW_ORDER:
      return "#5e9ceb";
    case ASSIGNED:
      return palette.warning.main;
    case COMPLETED:
      return palette.success.main;
    default:
      return "#c2c2c2";
  }
};

const OrderCard = (props) => {
  const { className, order, ...rest } = props;

  const classes = useStyles(props);

  return (
    <CardActionArea component={Link} to={props.to}>
      <Card {...rest} className={clsx(classes.root, className)}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Avatar className={classes.avatar}></Avatar>
              {/* <img
              alt="Client"
              className={classes.image}
              src={img}
              src={order.status}
            /> */}
            </Grid>
            <Grid item xs={5}>
              <Typography align="center" variant="h2">
                {convertCurrency(order.price)}
              </Typography>
            </Grid>
          </Grid>
          <div>
            <ul className={classes.orderCardList}>
              <li className={classes.orderCardListLi}>
                <AddLocationOutlinedIcon fontSize="small" />
                <span>{order.address}</span>
              </li>
              <li className={classes.orderCardListLi}>
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
                Updated {moment(order.postDate).fromNow()}
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <GetAppIcon className={classes.statsIcon} />
              <Typography
                display="inline"
                variant="body1"
                className={classes.statsIconActive}
              >
                {getStatusText(order.status)}
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </CardActionArea>
  );
};

OrderCard.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired,
};

export default OrderCard;
