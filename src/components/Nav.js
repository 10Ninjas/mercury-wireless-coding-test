import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    nested: {
      paddingLeft: theme.spacing(8),
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: "#fff",
    background: "#1e2730",
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List component="nav" className={classes.navList}>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Customer Support" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Tickets" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <ListItemText primary="Sales" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Field Service" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Network" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Accounting" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Administration" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
