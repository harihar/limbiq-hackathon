import React from "react";
import Grid from "@material-ui/core/Grid";
import NewsFeed from "./NewsFeed";
import Alerts from "./Alerts";
import Charts from "./Charts";

class DashBoard extends React.Component {
  styles = {
    underlinedText: {
      color: "#388e3c",
      textDecoration: "underline"
    }
  };
  render() {
    return (
      <div style={{ marginTop: "20px", marginLeft: "100px" }}>
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
          <Grid item xs={4}>
            <Charts />
          </Grid>
          <Grid item xs={3}>
            <NewsFeed />
          </Grid>
          <Grid item xs={3}>
            <Alerts />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DashBoard;
