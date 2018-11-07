import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-header">
                <div style={{alignSelf: "flex-end"}}>
                    Hi Ali, this is your Dashboard
                </div>
            </div>
        );
    }
}

export default Welcome;
