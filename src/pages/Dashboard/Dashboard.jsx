import React, { useState } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

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
          <Grid
            container
            xl={3.8}
            lg={3.8}
            md={3.8}
            sm={3.8}
            xs={3.8}
            className={classes.dashboard_container_1_1_0}
          >
            <Paper
              sx={{
                p: "20px 0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png"); !important`,
              }}
              elevation={12}
              style={{
                borderRadius: "20px",
              }}
            >
              <Typography variant="h1" color="#f1c40f" fontSize={200}>
                {card1}
              </Typography>
              <Typography variant="h4" color="#f1c40f">
                Users
              </Typography>
            </Paper>
          </Grid>
          <Grid
            container
            xl={3.8}
            lg={3.8}
            md={3.8}
            sm={3.8}
            xs={3.8}
            className={classes.dashboard_container_1_1_0}
          >
            <Paper
              sx={{
                p: "20px 0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png"); !important`,
              }}
              elevation={12}
              style={{
                borderRadius: "20px",
              }}
            >
              <Typography variant="h1" color="#9b59b6" fontSize={200}>
                {card2}
              </Typography>
              <Typography variant="h4" color="#9b59b6">
                Products
              </Typography>
            </Paper>
          </Grid>
          <Grid
            container
            xl={3.8}
            lg={3.8}
            md={3.8}
            sm={3.8}
            xs={3.8}
            className={classes.dashboard_container_1_1_0}
          >
            <Paper
              sx={{
                p: "20px 0px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png"); !important`,
              }}
              elevation={12}
              style={{
                borderRadius: "20px",
              }}
            >
              <Typography variant="h1" color="#2ecc71" fontSize={200}>
                {card3}
              </Typography>
              <Typography variant="h4" color="#2ecc71">
                Cart
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styleSheet)(Dashboard);
