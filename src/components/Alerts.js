import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";

import Paper from "@material-ui/core/Paper";

class Alerts extends React.Component {
  alerts = [
    {
      title: "Shipment #HOLD222 delayed",
      date: "Jan 9, 2018"
    },
    {
      title: "Shipment #HOLD222 accepted",
      date: "Jun 19, 2017"
    },
    {
      title: "Purchase order #REDHAT200 was rejected",
      date: "May 25, 2016"
    },
    {
      title: "Purchase order #Shes was accepted",
      date: "Feb 25, 2016"
    }
  ];
  render() {
    return (
      <Paper style={{ backgroundColor: "#ff8a65" }}>
        <List>
          {this.alerts.map((item, index) => (
            <div key={index}>
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary={item.title} secondary={item.date} />
              </ListItem>
              <li>
                <Divider inset />
              </li>
            </div>
          ))}
        </List>
      </Paper>
    );
  }
}

export default Alerts;
