import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DetailTabs from "./DetailTabs";
import ContactInfo from "./ContactInfo";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Sleep from "./Sleep";
import SiteEquipment from './SiteEquipment';

const useStyles = makeStyles({
  root: {},
  paper: {
    borderTop: "3px Purple Solid",
    width: "100%",
    padding: "8px",
  },
  detailSection: {
    marginBottom: 32,
  },
  detailHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  detailTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  detailBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailColumn1: {
    width: "60%",
  },
  detailColumn2: {
    width: "38%",
  },
  inputRow: {
    marginTop: 16,
    paddingBottom: 16,
    display: "flex",
    flexDirection: "row",
  },
  formControl: {
    minWidth: 200,
    marginRight: 32,
  },
});

export default function TicketDetail() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper} style={{ width: "100%" }}>
        <div className={classes.detailHeader}>
          <div className={classes.detailTitle}>
            <Typography variant="h6">Duane Smith</Typography>
            <LaunchIcon />
            <Typography variant="p">
              - zach.simmons on Aug 30, 2020 03:02pm - Ticket Assigned to
              zach.simmons
            </Typography>
          </div>
          <div className={classes.detailButtonGroup}>
            <ButtonGroup
              variant="contained"
              color="primary"
              size="small"
              aria-label="action buttons for ticket detail">
              <Button>Assign Ticket</Button>
              <Button>New Linked Ticket</Button>
              <Button>Watch</Button>
              <Button>Link</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.detailBody}>
          {/* Begin Column 1 */}
          <div className={classes.detailColumn1}>
            <div className={classes.inputRow}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Duane - 785-260-3410 - No Connection"
                variant="outlined"
              />
            </div>
            <div className={classes.detailSection}>
              <div className={classes.inputRow}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Status
                  </InputLabel>
                  <Select
                    native
                    value={null}
                    label="Status"
                    inputProps={{
                      name: "status",
                      id: "status",
                    }}>
                    <option value={"active"}>Active</option>
                    <option value={"disabled"}>Disabled</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="module">Module</InputLabel>
                  <Select
                    native
                    value={null}
                    label="module"
                    inputProps={{
                      name: "module",
                      id: "module",
                    }}>
                    <option value={"customerSupport"}>Customer Support</option>
                    <option value={"other"}>Other</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="department">Department</InputLabel>
                  <Select
                    native
                    value={null}
                    label="Department"
                    inputProps={{
                      name: "department",
                      id: "department",
                    }}>
                    <option value={"tier1Tech"}>Tier-1 Tech</option>
                    <option value={"tier2Tech"}>Tier-2 Tech</option>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputRow}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="category">Category</InputLabel>
                  <Select
                    native
                    value={null}
                    label="Category"
                    inputProps={{
                      name: "category",
                      id: "category",
                    }}>
                    <option value={"noConnection"}>No Connection</option>
                    <option value={"other"}>Other</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="subCategory">Sub Category</InputLabel>
                  <Select
                    native
                    value={null}
                    label="Sub Category"
                    inputProps={{
                      name: "subCategory",
                      id: "subCategory",
                    }}>
                    <option value={"noConnection"}>No Connection</option>
                    <option value={"other"}>Other</option>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputRow}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="priority">Prioriry</InputLabel>
                  <Select
                    native
                    value={null}
                    label="priority"
                    inputProps={{
                      name: "priority",
                      id: "priority",
                    }}>
                    <option value={"highest"}>Highest</option>
                    <option value={"medium"}>Medium</option>
                    <option value={"low"}>low</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="module">
                    How it was discovered?
                  </InputLabel>
                  <Select
                    native
                    value={null}
                    label="How it was discovered?"
                    inputProps={{
                      name: "discovered",
                      id: "discovered",
                    }}>
                    <option value={"callCenter"}>Call Center</option>
                  </Select>
                </FormControl>
              </div>
              <Button variant="contained" color="primary" size="small">
                Save
              </Button>
            </div>
            <DetailTabs />
          </div>
          {/* Begin Column 2 */}
          <div className={classes.detailColumn2}>
            <Alert
              style={{ marginBottom: 16 }}
              elevation={0}
              variant="filled"
              severity="error">
              <strong>Highest</strong> Importance Ticket
            </Alert>
            <ContactInfo />
            <Divider />
            <Sleep />
            <Divider />
            <SiteEquipment/>
            <Divider />
          </div>
        </div>
      </Paper>
    </div>
  );
}
