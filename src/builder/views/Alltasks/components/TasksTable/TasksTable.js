import React, { useState } from "react";
import clsx from "clsx";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { StatusBullet } from "../../../../components";
import { BUILDER_BASE_URL } from "../../../../../routes/URLMap";
import { getInitials } from "../../../../../utils/helper";
import { convertCurrency } from "../../../../../utils/helper";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: "flex-end",
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  status: {
    marginRight: theme.spacing(1),
  },
}));

const TasksTable = (props) => {
  const { className, orders, ...rest } = props;
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleClick = (event, id) => {
    const builderId = props.match.params.builderId;
    props.history.push(`${BUILDER_BASE_URL}/${builderId}/orders/${id}`);
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.header}>PostBy</TableCell>
                  <TableCell className={classes.header}>Price</TableCell>
                  <TableCell className={classes.header}>Location</TableCell>
                  <TableCell className={classes.header}>Due Date</TableCell>
                  <TableCell className={classes.header}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.slice(0, rowsPerPage).map((order) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={order._id}
                    selected={selectedUsers.indexOf(order._id) !== -1}
                    onClick={(event) => handleClick(event, order._id)}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={order.postBy.photo}
                        >
                          {getInitials(order.postBy.fullName)}
                        </Avatar>
                        <Typography variant="body1">
                          {order.postBy.fullName}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>{convertCurrency(order.price)}</TableCell>
                    <TableCell>{order.address}</TableCell>
                    <TableCell>
                      {moment(order.dueDate).format("DD/MM/YYYY hh:mm A")}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color="success"
                          size="sm"
                        />
                        {order.status}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

TasksTable.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array.isRequired,
};

export default withRouter(TasksTable);
