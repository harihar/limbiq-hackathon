import React, { Component } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRounded from "@material-ui/icons/SearchRounded";
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
        {/* <DashBoard /> */}
      </div>
    );
  }
}

export default App;
