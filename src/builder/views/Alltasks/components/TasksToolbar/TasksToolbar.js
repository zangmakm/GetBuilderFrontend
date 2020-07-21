import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
} from "@material-ui/core";
import { SearchInput } from "../../../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexGrow: 2,
  },
  row: {
    height: "32px",
  },
  newTask: {
    height: "32px",
  },
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const TasksToolbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.newTask}>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              control={<Checkbox checked={true} name="available" />}
              label="Available Tasks Only"
            />
          </FormGroup>
        </FormControl>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
    </div>
  );
};

TasksToolbar.propTypes = {
  className: PropTypes.string,
};

export default TasksToolbar;
