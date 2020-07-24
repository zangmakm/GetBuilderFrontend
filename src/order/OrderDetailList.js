import React from "react";
import moment from "moment";
import {
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import "../builder/views/BuildersOrder/scss/orderDetail.scss";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";

const useStylesModal = makeStyles(() => ({
  postTime: {
    color: "#546e7a",
  },
}));

export default function OrderDetailList(props) {
  const modalClasses = useStylesModal();

  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Client" src={props.clientPhoto} />
        </ListItemAvatar>
        <ListItemText primary="POSTED BY" secondary={props.clientName} />
        <p className={modalClasses.postTime}>
          {moment(props.postDate).fromNow()}
        </p>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <AddLocationOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="ADDRESS"
          secondary={
            <Typography variant="body2" color="textPrimary">
              {props.address}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <DateRangeOutlinedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary="DUE DATE"
          secondary={
            <Typography variant="body2" color="textPrimary">
              {moment(props.dueDate).format("DD/MM/YYYY hh:mm A")}
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Builder" src={props.builderPhoto} />
        </ListItemAvatar>
        <ListItemText
          primary="TAKEN BY"
          secondary={
            <Typography variant="body1" color="textPrimary">
              {props.builder && props.builder.builderName}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}
