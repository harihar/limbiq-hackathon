import React from "react";
import Paper from "@material-ui/core/Paper";
import OneFeed from "./OneFeed";

class NewsFeed extends React.Component {
  newsItems = [
    {
      news: "Ali shiped your order #BLUEHAT_2018",
      time: "Yesterday"
    },
    {
      news: "Ali accepted your order #BLUEHAT_2018",
      time: "2 days ago"
    },
    {
      news: "Malik shiped order #RED_SOCKS_100",
      time: "5 days ago"
    }
  ];
  render() {
    return (
      <Paper>
        {this.newsItems.map(element => (
          <OneFeed news={element.news} time={element.time} />
        ))}
        <OneFeed news="" />
      </Paper>
    );
  }
}

export default NewsFeed;
