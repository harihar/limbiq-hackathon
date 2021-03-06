import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/LinkOff";
import Divider from "@material-ui/core/Divider";

import Paper from "@material-ui/core/Paper";

class NewsFeed extends React.Component {
  alerts = [
    {
      title: "Ali shiped your order #BLUEHAT_2018",
      date: "Feb 9, 2018"
    },
    {
      title: "Ali accepted your order #BLUEHAT_2018",
      date: "Jul 19, 2017"
    },
    {
      title: "Malik shiped order #RED_SOCKS_100",
      date: "Jun 25, 2016"
    }
  ];
  render() {
    return (
      <Paper style={{ backgroundColor: "#e6ee9c5" }}>
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

export default NewsFeed;
