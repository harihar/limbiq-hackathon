import React from "react";

class OneFeed extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.news}</p>
        <p>{this.props.time}</p>
        <div style={{ height: "2px", color: "#eee" }} />
      </div>
    );
  }
}

export default OneFeed ;