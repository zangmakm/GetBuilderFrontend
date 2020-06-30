import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";

import { Profile, SidebarNav, UpgradePlan } from "./components";
import { BUILDER_BASE_URL } from "../../../../../routes/URLMap";

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
  const { open, variant, onClose, builderId, className, ...rest } = props;

  const classes = useStyles();
  const pages = [
    {
      title: "Dashboard",
      href: `${BUILDER_BASE_URL}/${builderId}/dashboard`,
      icon: <DashboardIcon />,
    },
    {
      title: "Browse All Tasks",
      href: `${BUILDER_BASE_URL}/${builderId}/browse-order`,
      icon: <ShoppingBasketIcon />,
    },
    {
      title: "Order Management",
      href: `${BUILDER_BASE_URL}/${builderId}/order-management`,
      icon: <PeopleIcon />,
    },

    // {
    //   title: 'Authentication',
    //   href: '/sign-in',
    //   icon: <LockOpenIcon />
    // },

    // {
    //   title: 'Icons',
    //   href: '/icons',
    //   icon: <ImageIcon />
    // },
    {
      title: "Account",
      href: `${BUILDER_BASE_URL}/${builderId}/account`,
      icon: <AccountBoxIcon />,
    },
    {
      title: "Settings",
      href: `${BUILDER_BASE_URL}/${builderId}/settings`,
      icon: <SettingsIcon />,
    },
    {
      title: "LogOut",
      href: `${BUILDER_BASE_URL}/${builderId}/logout`,
      icon: <TextFieldsIcon />,
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
        <Profile builderId={builderId} />
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
