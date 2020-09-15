import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 16,
  },
  paper: {
    borderTop: "3px Purple Solid",
    width: "100%",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginBottom: 16,
  },
  table: {
    width: '100%',
  },
}));

function createData(device, status, mac, ip) {
  return { device, status, mac, ip };
}

const rows = [
  createData("Grandstream HT-812", "OK", '00:0B:82', '10.5.116.157'),
];

export default function SiteEquipment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper} style={{ width: "100%" }}>
        <Typography style={{ marginBottom: 16 }} variant="h6">
          Site Equipment
        </Typography>
        <TableContainer>
          <Table size="small" className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Device</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>MAC</TableCell>
                <TableCell>IP</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.device}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.mac}</TableCell>
                  <TableCell>{row.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button className={classes.button} variant="contained" color="primary" size="small">
          Ping
        </Button>
        <Typography variant="body2">No tower/Equipment information available for Gransdream HT-B12</Typography>
        <TableContainer>
          <Table size="small" className={classes.table} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.device}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.mac}</TableCell>
                  <TableCell>{row.ip}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button className={classes.button} variant="contained" color="primary" size="small">
          Ping
        </Button>
        <Typography variant="body2">Gemteck Outdoor 3.65 GHz CPE w/integrated Panel Antenna</Typography>
        <Typography variant="body2">Lecompton BTS-3(QUANTUM 6636)</Typography>
      </Paper>
    </div>
  );
}
