import React, { useState } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import sample_img from "../../assets/images/store4.jpg";
import FileChooser from "../../components/FileChooser/FileChooser";

function Product(props) {
  const { classes } = props;
  const categories = ["Customer", "Admin", "Driver"];
  const [productFormData, setProductFormdata] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });
  function saveProduct() {}
  function clearFieldsOnClick() {}
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
        style={{ /* border: "2px solid red", */ height: "80vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          xl={11}
          lg={11}
          md={11}
          sm={11}
          xs={11}
          style={{ /* border: "2px solid green", */ height: "fit-content" }}
          className={classes.container2}
        >
          <Typography
            variant="h3"
            /* style={{ border: "2px solid red" }} */ color="#4169a9"
          >
            Product Manage
          </Typography>
        </Grid>
        <Grid
          container
          xl={11}
          lg={11}
          md={11}
          xs={11}
          sm={11}
          style={{
            // border: "2px solid blue",
            marginTop: "1%",
            height: "fit-content",
          }}
        >
          <ValidatorForm onSubmit={saveProduct} style={{ width: "100%" }}>
            <Grid
              container
              xl={12}
              lg={12}
              md={12}
              xs={12}
              sm={12}
              // style={{ border: "2px solid red" }}
              justifyContent="space-between"
            >
              <Grid
                item
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                // style={{ border: "2px solid blue" }}
              >
                <TextValidator
                  label="Title"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "7vh" }}
                  validators={["matchRegexp:^[A-z0-9-\\s]*$"]}
                  errorMessages={["Invalid Title"]}
                  value={productFormData.title}
                  onChange={(e) => {
                    setProductFormdata({
                      ...productFormData,
                      title: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid
                item
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                // style={{ border: "2px solid blue" }}
              >
                <TextValidator
                  label="Price"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "7vh" }}
                  validators={["matchRegexp:^[0-9.]*$"]}
                  errorMessages={["Input only numbers"]}
                  value={productFormData.price}
                  onChange={(e) => {
                    setProductFormdata({
                      ...productFormData,
                      price: e.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              container
              xl={12}
              lg={12}
              md={12}
              xs={12}
              sm={12}
              // style={{ border: "2px solid red" }}
              justifyContent="space-between"
            >
              <Grid
                item
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                // style={{ border: "2px solid blue" }}
              >
                <Autocomplete
                  disablePortal
                  id="role"
                  options={categories}
                  renderInput={(params) => (
                    <TextField {...params} label="Category" />
                  )}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    setProductFormdata({
                      ...productFormData,
                      category: v,
                    });
                  }}
                />
              </Grid>
              <Grid
                item
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                // style={{ border: "2px solid blue" }}
              >
                <TextValidator
                  label="Description"
                  type="text"
                  variant="outlined"
                  fullWidth
                  multiline
                  minRows={2}
                  // size="small"
                  required={true}
                  style={{ marginBottom: "7vh" }}
                  // validators={["matchRegexp:^[0-9.]*$"]}
                  // errorMessages={["Input only numbers"]}
                  value={productFormData.description}
                  onChange={(e) => {
                    setProductFormdata({
                      ...productFormData,
                      description: e.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              xl={5.8}
              lg={5.8}
              md={5.8}
              xs={5.8}
              sm={5.8}
              // style={{ border: "2px solid red" }}
              justifyContent="start"
              direction="row"
            >
              <img src={sample_img} className={classes.car__views} />
              <Grid
                container
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                style={{ /* border: "2px solid red",  */ marginBottom: "5px" }}
                justifyContent="start"
                alignItems="end"
                // direction="row"
              >
                <FileChooser text="Choose Image" />
              </Grid>
            </Grid>
            <Grid
              container
              xl={12}
              lg={12}
              md={12}
              xs={12}
              sm={12}
              // style={{ border: "2px solid red" }}
              className={classes.save_btn_container}
              justifyContent="end"
            >
              <Grid
                container
                xl={6}
                lg={6}
                md={6}
                xs={6}
                sm={6}
                //   style={{ border: "2px solid red" }}
                justifyContent="end"
              >
                <button
                  className={classes.btn__clear}
                  onClick={clearFieldsOnClick}
                >
                  Clear
                </button>
                <button className={classes.btn__save}>Save</button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styleSheet)(Product);
