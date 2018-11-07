import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import StatusFilter from "./StatusFilter";
import OrdersTable from "./OrdersTable";

import { mockOrders, mockStatuses } from "../../constants/orders";
import { filterOrders } from "../../services/orders";

const styles = {
  buttonsContainer: {
    textAlign: "right"
  },
  button: {
    marginLeft: 30,
    marginRight: 30
  },
  title: {
    paddingTop: 16
  }
};

class OrdersList extends Component {
  state = {
    filterBy: "all",
    shownOrders: mockOrders
  };

  applyFilter = filterBy => {
    this.setState({
      filterBy,
      shownOrders:
        filterBy === "all" ? mockOrders : filterOrders(mockOrders, filterBy)
    });
  };

  render() {
    const { classes } = this.props;
    const { filterBy, shownOrders } = this.state;

    return (
      <div className={classes.list}>
        <Typography variant="h4" gutterBottom className={classes.title}>
          My Orders
        </Typography>
        <div className={classes.buttonsContainer}>
          <StatusFilter
            statuses={mockStatuses}
            initialFilter={filterBy}
            onChange={this.applyFilter}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary">
            New
            <AddIcon />
          </Button>
        </div>

        <OrdersTable orders={shownOrders} />
      </div>
    );
  }
}

export default withStyles(styles)(OrdersList);
