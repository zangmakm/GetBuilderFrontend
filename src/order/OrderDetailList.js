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
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.0388379543992!2d153.02284641499415!3d-27.468050223208923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a036a05fbe1%3A0x848bcb56980537bf!2s116%20Adelaide%20St%2C%20Brisbane%20City%20QLD%204000!5e0!3m2!1szh-CN!2sau!4v1596180929644!5m2!1szh-CN!2sau"
            width="400"
            height="300"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
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
