import React from "react";

class OneFeed extends React.Component {
  render() {
    const backGround = this.props.position % 2 === 0 ? "#9fa8da" : "#e8eaf6";
    return (
      <div
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          backgroundColor: [backGround]
        }}
      >
        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px"
          }}
        >
          <p style={{ paddingTop: "10px" }}>{this.props.news}</p>
          <p style={{ paddingBottom: "10px" }}>{this.props.time}</p>
        </div>
      </div>
    );
  }
}

export default OneFeed;
