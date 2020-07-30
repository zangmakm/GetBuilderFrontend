import React from "react";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SupportItem(props) {
  return (
    <Paper component={Link} to={props.link} className="support__body--button">
      {props.label}
    </Paper>
  );
}
