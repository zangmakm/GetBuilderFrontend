import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { ASSIGNED, COMPLETED } from "../../../utils/variables";
import { BUILDER_BASE_URL } from "../../../routes/URLMap";

import {
  AllTasks,
  AcceptTasks,
  CompletedTasks,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
} from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const builderId = props.match.params.builderId;
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          component={Link}
          to={`${BUILDER_BASE_URL}/${builderId}/order-management`}
        >
          <AllTasks />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          component={Link}
          to={{
            pathname: `${BUILDER_BASE_URL}/${builderId}/order-management`,
            status: { search: ASSIGNED },
          }}
        >
          <AcceptTasks />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          component={Link}
          to={{
            pathname: `${BUILDER_BASE_URL}/${builderId}/order-management`,
            status: { search: COMPLETED },
          }}
        >
          <CompletedTasks />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item xs={12}>
          <LatestProducts />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
