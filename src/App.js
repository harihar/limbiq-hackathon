import React, {Component} from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchRounded from "@material-ui/icons/SearchRounded";

import DashboardAli from "./components/dashboard-ali/DashboardAli";
import DashBoard from "./components/DashBoard";
import OrdersList from "./components/orders-list/OrdersList";
import Navigation from "./components/navigation/Navigation";

import "./App.css";

class App extends Component {
    render() {
        let viewToRender = <DashBoard/>;

        if (window.location.href.endsWith("dashboardAli")) {
            viewToRender = <DashboardAli/>;
        } else if (window.location.href.endsWith("orders")) {
            viewToRender = <OrdersList/>;
        }

        return (
            <div className="App">
                <Navigation/>
                <div style={{float: "right"}}>
                    <TextField
                        style={{margin: "normal", marginRight: "20px"}}
                        placeholder="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRounded/>
                                </InputAdornment>
                            )
                        }}
                    />
                </div>
                <div>{viewToRender}</div>
            </div>
        );
    }
}

export default App;
