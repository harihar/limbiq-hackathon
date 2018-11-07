import React from "react";
import Grid from "@material-ui/core/Grid";
import NewsFeed from "./NewsFeed";

class DashBoard extends React.Component {
  styles = {
    underlinedText: {
      color: "#388e3c",
      textDecoration: "underline"
    }
  };
  render() {
    return (
      <div>
        <div
          style={{
            clear: "both",
            marginTop: "100px",
            fontWeight: 600,
            fontSize: "22px"
          }}
        >
          <p>Hi Jane! Welcome to your dashboard.</p>
        </div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <NewsFeed />
          </Grid>
          <Grid item xs={3}>
            <NewsFeed />
          </Grid>
          <Grid item xs={3}>
            <NewsFeed />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DashBoard;
