import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DashboardAli from "./components/dashboard-ali/DashboardAli";
import DashBoard from "./components/DashBoard";

if (window.location.href.endsWith("dashboardAli")) {
    ReactDOM.render(<DashboardAli/>, document.getElementById('root'));
} else if (window.location.href.endsWith("orders")) {
    ReactDOM.render(<App/>, document.getElementById('root'));
} else {
    ReactDOM.render(<DashBoard/>, document.getElementById('root'));
}
