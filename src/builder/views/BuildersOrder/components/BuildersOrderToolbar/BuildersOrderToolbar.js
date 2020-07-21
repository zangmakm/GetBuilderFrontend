import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button, ButtonGroup } from "@material-ui/core";

import { SearchInput } from "../../../../components";

const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  button: {
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightMedium,
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const BuildersOrderToolbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div>
        <Grid container spacing={4}>
          <Grid item lg={9} md={9} xl={9} xs={12}>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="Orders ButtonGroup"
            >
              <Button
                activeClassName={classes.active}
                className={classes.button}
                onClick={props.searchAll}
              >
                All Orders
              </Button>
              <Button
                activeClassName={classes.active}
                className={classes.button}
                onClick={props.searchAssigned}
              >
                Assigned Orders
              </Button>
              <Button
                activeClassName={classes.active}
                className={classes.button}
                onClick={props.searchCancelled}
              >
                Cancelled By Builder
              </Button>
              <Button
                activeClassName={classes.active}
                className={classes.button}
                onClick={props.searchCompleted}
              >
                Completed Orders
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item lg={3} md={3} xl={3} xs={12}>
            <SearchInput
              className={classes.searchInput}
              placeholder="Search product"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

BuildersOrderToolbar.propTypes = {
  className: PropTypes.string,
};

export default BuildersOrderToolbar;
