import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Breadcrumbs from "./Breadcrumbs";
import TicketDetail from './TicketDetail';

const useStyles = makeStyles({
  root: {
    padding: '16px',
    width: '100%',
  },
});

export default function AppBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Breadcrumbs />
      <TicketDetail />
    </div>
  );
}
