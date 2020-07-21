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
  Backdrop,
  Button,
  Modal,
  Fade,
} from "@material-ui/core";
import "../builder/views/BuildersOrder/scss/orderDetail.scss";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";

const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    position: "relative",
    width: 600,
    height: 500,
  },
  mapButton: {
    position: "absolute",
    right: -30,
    backgroundColor: "white",
    minWidth: 30,
    top: 0,
    border: "none",
    borderRadius: 0,
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      right: 0,
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    "&:hover": {
      color: "#2196f3",
      backgroundColor: "white",
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "rgba(255, 255, 255, 0)",
      },
    },
  },
  paper: {
    display: "flex",
    boxSizing: "border-box",
    position: "relative",
    width: "960px",
    height: "98%",
    overflow: "scroll",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1, 0),
    outline: 0,
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      padding: theme.spacing(2),
    },
  },
  button: {
    position: "absolute",
    right: -18,
    top: -5,
    border: "none",
    borderRadius: "100px",
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      right: -5,
      top: 5,
    },
    "&:hover": {
      color: "#2196f3",
      backgroundColor: "transparent",
    },
  },
}));

export default function OrderDetailList(props) {
  const modalClasses = useStylesModal();

  const [openMap, setOpenMap] = React.useState(false);
  const [openBusiness, setOpenBusiness] = React.useState(false);

  const handleClose = () => {
    setOpenMap(false);
    setOpenBusiness(false);
  };
  const handleToggleMap = () => {
    setOpenMap(!openMap);
  };
  const handleToggleBusiness = () => {
    setOpenBusiness(!openBusiness);
  };

  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src="" />
          {/* <Avatar alt={props.clientName} src={props.clientPhoto} /> */}
        </ListItemAvatar>
        <ListItemText primary="POSTED BY" secondary={props.clientName} />
        <p className="order-detail__postTime">
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
        <div className="order-detail__map">
          <Button onClick={handleToggleMap}>View Map</Button>
          {/* <Modal
            className={modalClasses.modal}
            open={openMap}
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 1000,
              open: openMap,
            }}
          >
            <Fade in={openMap}>
              <div className={modalClasses.map}>
                <Maps address={props.location} />
                <Button
                  onClick={handleClose}
                  className={modalClasses.mapButton}
                >
                  ✕
                </Button>
              </div>
            </Fade>
          </Modal> */}
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
          {/* {props.businessPhoto ? (
            <Avatar alt="business photo" src={props.businessPhoto} />
          ) : ( */}
          <Avatar alt="builder photo" src="" />
          {/* )} */}
        </ListItemAvatar>
        <ListItemText
          primary="TAKEN BY"
          secondary={
            <Typography variant="body1" color="textPrimary">
              {props.builder && props.builder.builderName}
            </Typography>
          }
        />
        <div className="order-detail__builder">
          <div className={modalClasses.root}>
            <Button
              onClick={handleToggleBusiness}
              disabled={props.builder ? false : true}
            >
              View Builder
            </Button>
            {/* <Modal
              className={modalClasses.modal}
              open={openBusiness}
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 1000,
                open: openBusiness,
              }}
            >
              <Fade in={openBusiness}>
                <div className={modalClasses.paper}>
                  <BusinessProfile business={props.business} />
                  <Button onClick={handleClose} className={modalClasses.button}>
                    ✕
                  </Button>
                </div>
              </Fade>
            </Modal> */}
          </div>
        </div>
      </ListItem>
    </List>
  );
}
