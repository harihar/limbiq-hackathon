import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './DashboardAli.css';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import {withStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";

const styles = {
    listItemIcon: {
        marginRight: 0,
    }
};

class DashboardAli extends Component {
    state = {
        drawerOpen: false
    };

    handleDrawerOpen() {
        this.setState({drawerOpen: !this.state.drawerOpen});
    }

    handleListClick() {
        this.setState({drawerOpen: false});
    }

    retrieveUnansweredPurchaseOrdersList() {
        return [
            {
                id: 1,
                poFile: "shirts.pdf"
            },
            {
                id: 2,
                poFile: "socks.pdf"
            }
        ];
    }

    render() {
        const {drawerOpen} = this.state;
        return (
            <div className="App">
                <div/>
                <div className="welcome-header">
                    <div style={{alignSelf: "flex-end"}}>
                        Hi Ali, this is your Dashboard
                    </div>
                    <div>
                        <Grid container spacing={8} alignItems="flex-end">
                            <Grid item>
                                <SearchIcon />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Search"
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.handleDrawerOpen.bind(this)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
                <div className="site-content">
                    <div>
                        <span style={{fontSize: "12px"}}>Widgets</span>
                        <div>
                            <div className="add-icon">
                                <AddIcon style={{height: "0.75em", width: "0.75em"}}/>
                            </div>
                        </div>
                    </div>
                    <div/>
                    <Card className="charts">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Overview
                            </Typography>
                            Here comes the charts!
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Unanswered PO requests
                            </Typography>
                            <List>
                                {this.retrieveUnansweredPurchaseOrdersList().map((po, i) => (
                                    <ListItem button key={i}>
                                        <ListItemIcon><AttachFileIcon/></ListItemIcon>
                                        <ListItemText>{po.poFile}</ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Alerts
                            </Typography>
                            <Avatar className="done-avatar">
                                <ThumbUpIcon color="action"/>
                            </Avatar>
                            <Typography color="textSecondary" gutterBottom
                                        style={{textAlign: "center", marginTop: "0.5em"}}>
                                You've no alerts
                            </Typography>
                        </CardContent>
                    </Card>
                </div>


                <Drawer
                    variant="persistent"
                    anchor="left"
                    open={drawerOpen}
                >
                    <List style={styles.list}>
                        {[<HomeIcon/>].map(icon => (
                            <ListItem button key={icon} onClick={this.handleListClick.bind(this)}>
                                <ListItemIcon style={styles.listItemIcon}>{icon}</ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(DashboardAli);
