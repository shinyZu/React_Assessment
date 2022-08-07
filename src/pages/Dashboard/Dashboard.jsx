import React, { useState } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MyCard from "../../components/Card/Card";

function Dashboard(props) {
  const { classes } = props;
  const [card1, setCard1] = useState("10");
  const [card2, setCard2] = useState("17");
  const [card3, setCard3] = useState("08");
  return (
    <>
      <Navbar />
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.dashboard_container_1_0}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          xl={11}
          lg={11}
          md={12}
          sm={12}
          xs={12}
          className={classes.dashboard_container_1_1}
          justifyContent="space-between"
        >
          <MyCard cardNo={card1} cardTitle="Users" color="#f1c40f" />
          <MyCard cardNo={card2} cardTitle="Users" color="#9b59b6" />
          <MyCard cardNo={card3} cardTitle="Users" color="#2ecc71" />
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styleSheet)(Dashboard);
