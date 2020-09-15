import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import AppBody from "./AppBody"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <AppBody />
    </div>
  );
}
