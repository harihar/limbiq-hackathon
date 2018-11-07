import React, { Component } from "react";

import StatusFilter from "./StatusFilter";
import OrdersTable from "./OrdersTable";

import { mockOrders, mockStatuses } from "../../constants/orders";
import { filterOrders } from "../../services/orders";

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
    const { filterBy, shownOrders } = this.state;

    return (
      <div className="orders-list">
        <div className="orders-list__buttons">
          <StatusFilter
            statuses={mockStatuses}
            initialFilter={filterBy}
            onChange={this.applyFilter}
          />
        </div>

        <OrdersTable orders={shownOrders} />
      </div>
    );
  }
}

export default OrdersList;
