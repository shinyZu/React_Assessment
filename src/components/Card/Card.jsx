import React from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function MyCard(props) {
  const { classes } = props;
  return (
    <>
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
          <Typography variant="h1" color={props.color} fontSize={200}>
            {props.cardNo}
          </Typography>
          <Typography variant="h4" color={props.color}>
            {props.cardTitle}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default withStyles(styleSheet)(MyCard);
