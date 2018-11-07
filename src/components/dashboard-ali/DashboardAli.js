import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
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
import Welcome from "./welcome";
import {mockOrders} from "../../constants/orders";
import {Pie} from 'react-chartjs-2';

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
        return mockOrders;
    }

    render() {
        const {drawerOpen} = this.state;
        return (
            <div className="dashboard">
                <div/>
                <Welcome/>
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
                            <Pie width={150} height={150} options={{
                                maintainAspectRatio: false
                            }} data={this.getPieData()}/>
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
                                        <ListItemText>{po.name}</ListItemText>
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

    getPieData() {
        return {
            datasets: [{
                data: [50, 15],
                backgroundColor: ["#4bc0c0", "#ff6384"]
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Shipped',
                'Not responded so far'
            ]
        }
    }
}

export default withStyles(styles, {withTheme: true})(DashboardAli);
