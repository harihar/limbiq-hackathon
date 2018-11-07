import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ViewListIcon from "@material-ui/icons/ViewList";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },
  listIcon: {
    marginRight: 0
  },
  icon: {
    fontSize: 30,
    cursor: "pointer"
  }
});

const navigateHome = () => {
  window.location.href = "/";
};

const navigateToOrders = () => {
  window.location.href = "/orders";
};

function Navigation(props) {
  const { classes } = props;

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}>
      <List className={classes.list}>
        <ListItem>
          <ListItemIcon onClick={e => navigateHome()} className={classes.listIcon}>
            <HomeIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon
            onClick={e => navigateToOrders()}
            className={classes.listIcon}>
            <ViewListIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.listIcon}>
            <AddCircleIcon className={classes.icon} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Navigation);
