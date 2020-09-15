import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from '@material-ui/core';
import { Phone } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    marginBottom: 16,
  },
  paper: {
    borderTop: "3px Purple Solid",
    width: "100%",
    padding: "8px",
  },
});

export default function ContactInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper
        elevation={0}
        className={classes.paper}
        style={{ width: "100%" }}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body1"><Phone fontSize="small"/>(785)246-5774</Typography>
        </Paper>
    </div>
  );
}
