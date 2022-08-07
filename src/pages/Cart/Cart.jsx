import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style.js";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import FileChooser from "../../components/FileChooser/FileChooser";
import Navbar from "../../components/Navbar/Navbar";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MyTextValidator from "../../components/common/TextValidator/TextValidator.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function Cart(props) {
  const { classes } = props;
  const categories = ["Customer", "Admin", "Driver"];
  const [date, setDate] = useState(null);
  const [cartFormData, setCartFormData] = useState({
    username: "",
    date: "",
    title: "",
    qty: "",
  });
  function saveOrder() {}
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
            Cart Manage
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
            marginTop: "-5%",
            height: "fit-content",
          }}
        >
          <ValidatorForm onSubmit={saveOrder} style={{ width: "100%" }}>
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
                    <TextField {...params} label="Username" />
                  )}
                  style={{ marginBottom: "7vh" }}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    setCartFormData({
                      ...cartFormData,
                      username: v,
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    value={date}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                    disablePast
                  />
                </LocalizationProvider>
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
                    <TextField {...params} label="Product Title" />
                  )}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    setCartFormData({
                      ...cartFormData,
                      title: v,
                    });
                  }}
                />
              </Grid>

              <MyTextValidator
                gridtType="item"
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                label="Qty"
                type="number"
                variant="outlined"
                fullWidth
                required={true}
                validators={["matchRegexp:^[0-9]{1,5}$"]}
                errorMessages={["Only Input Numbers"]}
                style={{ marginBottom: "7vh" }}
                value={cartFormData.qty}
                onChange={(e) => {
                  setCartFormData({
                    ...cartFormData,
                    qty: e.target.value,
                  });
                }}
              />
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

export default withStyles(styleSheet)(Cart);
