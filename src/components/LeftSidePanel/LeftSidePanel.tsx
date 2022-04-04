import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profile from "../assets/profile.jpg";
import PieCharts from "../Piecharts/Piechart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: "40%",
    borderRadius: "50%",
  },
  boxBackground: {
    backgroundColor: "#252530",
  },
  skill: {
    background: "#20202A",
  },

  add: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "400px",
    margin: "0 auto",
    background: "#20202A",
    padding: "5px 20px",
  },
  address: {
    color: "#FFF",
    fontSize: "14px",
  },
  address1: {
    color: "#8c8c8e",
    fontSize: "14px",
  },
}));

function LeftSidePanel() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Box color={"white"} p={2} className={classes.boxBackground}>
          <img className={classes.image} src={profile} alt="profile" />
          <Typography
            variant="h6"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >
            Vikas Choudhary
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "14px", marginTop: "10px", color: "#8c8c8e" }}
          >
            Front-end Deweloper <br></br> Ui/UX Designer,
          </Typography>
        </Box>
        <Grid className={classes.skill}>
          <Grid className={classes.add}>
            <Typography className={classes.address}>Residence:</Typography>
            <Typography className={classes.address1}>India</Typography>
          </Grid>
          <Grid className={classes.add}>
            <Typography className={classes.address}>City:</Typography>
            <Typography className={classes.address1}>Indore</Typography>
          </Grid>
          <Grid className={classes.add}>
            <Typography className={classes.address}>Age:</Typography>
            <Typography className={classes.address1}>29</Typography>
          </Grid>
          <hr style={{ width: "85%", marginBottom: "10px" }}></hr>
          <Grid>
            <PieCharts />
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default LeftSidePanel;
