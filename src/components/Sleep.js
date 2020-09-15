import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 16,
  },
  paper: {
    borderTop: "3px Purple Solid",
    width: "100%",
    padding: "8px",
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  textField: {
    width: '100%',
  },
}));

export default function Sleep() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper} style={{ width: "100%" }}>
        <Typography style={{ marginBottom: 16 }} variant="h6">Sleep</Typography>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Select a Wake Up Time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button variant="contained" color="primary" size="small">
          Sleep
        </Button>
      </Paper>
    </div>
  );
}