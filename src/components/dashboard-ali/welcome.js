import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import SearchIcon from '@material-ui/icons/Search';

class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-header">
                <div style={{alignSelf: "flex-end"}}>
                    Hi Ali, this is your Dashboard
                </div>
                <div>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <SearchIcon/>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Search"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Welcome;
