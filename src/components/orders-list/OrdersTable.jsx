import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

function OrdersTable(props) {
  const { classes, orders } = props;

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell numeric>PO #</TableCell>
          <TableCell>PO Name</TableCell>
          <TableCell>Supplier</TableCell>
          <TableCell>ETA</TableCell>
          <TableCell>PO File</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Tracking Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map(order => {
          return (
            <TableRow key={order.number}>
              <TableCell numeric>{order.number}</TableCell>
              <TableCell component="th" scope="row">
                {order.name}
              </TableCell>
              <TableCell>{order.supplier}</TableCell>
              <TableCell>{order.eta}</TableCell>
              <TableCell>{order.file}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.trackingNumber}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default withStyles(styles)(OrdersTable);
