import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Product() {
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
        style={{ border: "2px solid red" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          style={{ border: "2px solid green" }}
          // justifyContent="center"
          // alignItems="center"
        >
          <Typography variant="h4" style={{ border: "2px solid red" }}>
            Product Manage
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Product;
