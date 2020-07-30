import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import SupportItem from "./SupportItem";
import { isLoggedIn, getClientId, getBuilderId } from "../utils/auth";
import {
  SIGNUP_URL,
  CLIENT_BASE_URL,
  BUILDER_BASE_URL,
} from "../routes/URLMap";

const useStyles = makeStyles((theme) => ({
  root: {},
  margin: {
    marginBottom: theme.spacing(1.5),
  },
}));

export default function SupportContent() {
  const classes = useStyles();
  const clientId = getClientId();
  const builderId = getBuilderId();

  const supportGroup = [
    {
      name: "Client Register",
      link: `${SIGNUP_URL}/user/client`,
    },

    {
      name: "Builder Register",
      link: `${SIGNUP_URL}/user/builder`,
    },
  ];

  const clientGroup = [
    {
      name: "Client Dashboard",
      link: `${CLIENT_BASE_URL}/${clientId}/dashboard`,
    },
    {
      name: "Client Account",
      link: `${CLIENT_BASE_URL}/${clientId}/account`,
    },
    {
      name: "Client Change Password",
      link: `${CLIENT_BASE_URL}/${clientId}/settings`,
    },
    {
      name: "Client's Order",
      link: `${CLIENT_BASE_URL}/${clientId}/order-management`,
    },
  ];

  const builderGroup = [
    {
      name: "Browse All Tasks",
      link: `${BUILDER_BASE_URL}/${builderId}/browse-order`,
    },
    {
      name: "Builder Dashboard",
      link: `${BUILDER_BASE_URL}/${builderId}/dashboard`,
    },
    {
      name: "Builder Account",
      link: `${BUILDER_BASE_URL}/${builderId}/account`,
    },
    {
      name: "Builder Change Password",
      link: `${BUILDER_BASE_URL}/${builderId}/settings`,
    },
    {
      name: "Builder's Order",
      link: `${BUILDER_BASE_URL}/${builderId}/order-management`,
    },
  ];

  return (
    <div className="support__container--whole">
      <Typography
        variant="h2"
        align="center"
        color="primary"
        className="support__header--top"
      >
        How can we help?
      </Typography>
      <div className="button-group__container--whole">
        <Grid container spacing={3} className={classes.margin}>
          {supportGroup.map((item) => (
            <Grid item xs={12} sm={6} className="support__body--top">
              <SupportItem label={item.name} link={item.link} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} className={classes.margin}>
          {clientGroup.map((item) => (
            <Grid item xs={12} sm={4} className="support__body--top">
              {isLoggedIn() && clientId ? (
                <SupportItem label={item.name} link={item.link} />
              ) : (
                <SupportItem
                  label={item.name}
                  link={`${SIGNUP_URL}/user/client`}
                />
              )}
            </Grid>
          ))}

          {builderGroup.map((item) => (
            <Grid item xs={12} sm={4} className="support__body--top">
              {isLoggedIn() && builderId ? (
                <SupportItem label={item.name} link={item.link} />
              ) : (
                <SupportItem
                  label={item.name}
                  link={`${SIGNUP_URL}/user/builder`}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
