import React from "react";
import PieChart from "react-minimal-pie-chart";

import Paper from "@material-ui/core/Paper";

class Charts extends React.Component {
  render() {
    return (
      <Paper>
        <PieChart
          ratio="1"
          radius={20}
          animate={true}
          data={[
            { title: "One", value: 40, color: "#d4e157" },
            { title: "Two", value: 15, color: "#ffa000" },
            { title: "Three", value: 10, color: "#29b6f6" }
          ]}
        />
      </Paper>
    );
  }
}

export default Charts;
