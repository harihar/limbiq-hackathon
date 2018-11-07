import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRounded from "@material-ui/icons/SearchRounded";

import OrdersList from "./components/orders-list/OrdersList";

import "./App.css";
import DashBoard from "./components/DashBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ float: "right" }}>
          <TextField
            style={{ margin: "normal", marginRight: "100px" }}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div>
          <OrdersList />
        </div>
        <DashBoard />
      </div>
    );
  }
}

export default App;
