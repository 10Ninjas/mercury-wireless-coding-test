import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  newNote: {
    marginBottom: 32,
  },
  notesHistory: {

  },
  note: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
    marginTop: 16,
  },
  noteContainer: {
    marginLeft: 16,
  },
});

export default function TabNotes() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.newNote}>
        <TextField
          style={{ width: "100%", marginBottom: 16 }}
          id="outlined-multiline-static"
          multiline
          rows={3}
          placeholder={"Write a new note"}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          aria-label="action buttons for ticket detail">
          Send
        </Button>
      </div>
      <div className={classes.notesHistory}>
        <div className={classes.note}>
          <AccountCircle fontSize="large" />
          <div className={classes.noteContainer}>
            <Typography variant="body2">
              <strong>zach.simmons</strong> - Aug 30, 2020 05:16pm
            </Typography>
            <Typography variant="body2">
              Hey Ashlee,
              <br />
              <br />
              Duane called back in and he is having to some packet loss on the
              radio and tower again. it looks like the last time this happened
              Charles made some adjustments and got it fixed. I ran through the
              playbook and it is all documented. I also checked other radios and
              they all have about a 15% packet loss.
            </Typography>
          </div>
        </div>
        <Divider variant="middle"></Divider>
        <div className={classes.note}>
          <AccountCircle fontSize="large" />
          <div className={classes.noteContainer}>
            <Typography variant="body2">
              <strong>zach.simmons</strong> - Aug 30, 2020 05:16pm
            </Typography>
            <Typography variant="body2">
              Going to send a message to the leads.
            </Typography>
          </div>
        </div>
        <Divider variant="middle"></Divider>
        <div className={classes.note}>
          <AccountCircle fontSize="large" />
          <div className={classes.noteContainer}>
            <Typography variant="body2">
              <strong>zach.simmons</strong> - Aug 30, 2020 05:16pm
            </Typography>
            <Typography variant="body2">
              Testing a couple of other radios to see their packet loss,
              <br />
              <br />
              Radio #1:
              <br />
              <br />
              Ping statistics for 10.3.3.188:<br />
              Packets: Sent = 97, Recieved = 83, Lost = 14 (14% loss),<br />
              Approximate round trip ties in milli-seconds:<br />
              Minimum = 98ms, Maximum = 258ms, Average = 157ms
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
