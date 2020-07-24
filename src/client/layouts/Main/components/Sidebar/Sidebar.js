import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Profile, SidebarNav } from "./components";
import { SERVICE_URL, CLIENT_BASE_URL } from "../../../../../routes/URLMap";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)",
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, clientId, className, ...rest } = props;

  const classes = useStyles();
  const pages = [
    {
      title: "Dashboard",
      href: `${CLIENT_BASE_URL}/${clientId}/dashboard`,
      icon: <DashboardIcon />,
    },
    {
      title: "Post A Task",
      href: `${SERVICE_URL}`,
      icon: <AssignmentIcon />,
    },
    {
      title: "Order Management",
      href: `${CLIENT_BASE_URL}/${clientId}/order-management`,
      icon: <ShoppingBasketIcon />,
    },
    {
      title: "Account",
      href: `${CLIENT_BASE_URL}/${clientId}/account`,
      icon: <AccountBoxIcon />,
    },
    {
      title: "Settings",
      href: `${CLIENT_BASE_URL}/${clientId}/settings`,
      icon: <SettingsIcon />,
    },
    {
      title: "LogOut",
      href: `${CLIENT_BASE_URL}/${clientId}/logout`,
      icon: <ExitToAppIcon />,
      onClick: "handleLogOut",
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile clientId={clientId} />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
