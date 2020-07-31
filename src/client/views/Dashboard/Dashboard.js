import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { ASSIGNED, NEW_ORDER } from "../../../utils/variables";
import { CLIENT_BASE_URL } from "../../../routes/URLMap";
import {
  AllTasks,
  NewTasks,
  AssignedTasks,
  TotalProfit,
  LatestSales,
  UsersByDevice,
} from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "#f4f6f8",
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const clientId = props.match.params.clientId;
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
          to={`${CLIENT_BASE_URL}/${clientId}/order-management`}
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
            pathname: `${CLIENT_BASE_URL}/${clientId}/order-management`,
            status: { search: NEW_ORDER },
          }}
        >
          <NewTasks />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
          component={Link}
          to={{
            pathname: `${CLIENT_BASE_URL}/${clientId}/order-management`,
            status: { search: ASSIGNED },
          }}
        >
          <AssignedTasks />
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
      </Grid>
    </div>
  );
};

export default Dashboard;
