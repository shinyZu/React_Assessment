import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style.js";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Box from "@mui/material/Box";
import UserTable from "../../components/common/Table/Table";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MyTextValidator from "../../components/common/TextValidator/TextValidator.jsx";

function Register(props) {
  const { classes } = props;

  const [regFormData, setRegFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    city: "",
    street: "",
    streetNo: "",
    zipCode: "",
    latValue: "",
    longValue: "",
    mobileNo: "",
  });

  const rows = [
    {
      id: "0",
      first_name: "john",
      last_name: "doe",
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      city: "kilcoole",
      street: "new road",
      street_no: "7682",
      zip_code: "12926-3874",
      lat_value: "-37.3159",
      long_value: "81.1496",
      mobile_no: "1-570-236-7033",
    },
  ];
  const columns = [
    {
      field: "id",
      headerName: "Actions",
      renderCell: (cellValues) => {
        // console.log(cellValues);
        return (
          <>
            <Tooltip title="Edit">
              <IconButton>
                <EditIcon
                  color="black"
                  onClick={() => {
                    console.log("clicked row : " + cellValues.id);
                    // console.log(carData[cellValues.id]);
                    // loadDataToFields(cellValues.id, carData[cellValues.id]);
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon
                  // fontSize="large"
                  onClick={() => {
                    console.log("clicked row : " + cellValues.id);
                    // deleteCar(carData[cellValues.id]);
                  }}
                />
              </IconButton>
            </Tooltip>
          </>
        );
      },
      width: 150,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "first_name",
      headerName: "First Name",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "last_name",
      headerName: "Last Name",
      width: 140,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "username",
      headerName: "Username",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "city",
      headerName: "City",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "street",
      headerName: "Street",
      width: 200,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "street_no",
      headerName: "Street No",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "zip_code",
      headerName: "Zip Code",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "lat_value",
      headerName: "Lat Value",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "long_value",
      headerName: "Long Value",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "mobile_no",
      headerName: "Mobile No",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },
  ];

  function clearFieldsOnClick() {
    setRegFormData({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      city: "",
      street: "",
      streetNo: "",
      zipCode: "",
      latValue: "",
      longValue: "",
      mobileNo: "",
    });
  }

  function registerUser() {
    console.log(regFormData);
  }

  return (
    <>
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        xs={12}
        sm={12}
        // style={{ border: "2px solid red" /* , height: "100vh" */ }}
        justifyContent="center"
      >
        <Grid
          container
          xl={11}
          lg={11}
          md={11}
          xs={11}
          sm={11}
          //   style={{ border: "2px solid blue" }}
          className={classes.container2}
        >
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            xs={12}
            sm={12}
            style={{ /* border: "2px solid green", */ height: "fit-content" }}
          >
            <Typography variant="h4" /* style={{ border: "2px solid red" }} */>
              User Registration
            </Typography>
          </Grid>
          <Grid
            container
            xl={12}
            lg={12}
            md={12}
            xs={12}
            sm={12}
            style={{
              //   border: "2px solid pink",
              marginTop: "10px",
              height: "fit-content",
            }}
            rowGap={20}
          >
            <ValidatorForm onSubmit={registerUser} style={{ width: "100%" }}>
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
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="First Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[A-z]*$"]}
                  errorMessages={["Invalid Name"]}
                  value={regFormData.firstName}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      firstName: e.target.value,
                    });
                  }}
                />
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Last Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[A-z]*$"]}
                  errorMessages={["Invalid Name"]}
                  value={regFormData.lastName}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      lastName: e.target.value,
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
                justifyContent="space-between"
              >
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$"]}
                  errorMessages={["Invalid Email Address"]}
                  value={regFormData.email}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      email: e.target.value,
                    });
                  }}
                />

                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Username"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  validators={["matchRegexp:^[A-z0-9]*$"]}
                  errorMessages={["Invalid Name"]}
                  value={regFormData.username}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      username: e.target.value,
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
                justifyContent="space-between"
              >
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                  errorMessages={["must have atleast 8 characters"]}
                  value={regFormData.password}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      password: e.target.value,
                    });
                  }}
                />

                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="City"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  validators={["matchRegexp:^[A-z0-9]*$"]}
                  errorMessages={["Invalid City Name"]}
                  value={regFormData.city}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      city: e.target.value,
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
                justifyContent="space-between"
              >
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Street"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[A-z0-9\\s]*$"]}
                  errorMessages={["Invalid Street Name"]}
                  value={regFormData.street}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      street: e.target.value,
                    });
                  }}
                />

                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Street No"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  validators={["matchRegexp:^[A-z0-9]*$"]}
                  errorMessages={["Invalid Characters"]}
                  value={regFormData.streetNo}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      streetNo: e.target.value,
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
                justifyContent="space-between"
              >
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Zip Code"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[A-z0-9-]*$"]}
                  errorMessages={["Invalid Zip Code"]}
                  value={regFormData.zipCode}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      zipCode: e.target.value,
                    });
                  }}
                />

                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Lat Value"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  validators={["matchRegexp:^[0-9.-]*$"]}
                  errorMessages={["Invalid Lat Value"]}
                  value={regFormData.latValue}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      latValue: e.target.value,
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
                justifyContent="space-between"
              >
                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Long Value"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  style={{ marginBottom: "15px" }}
                  validators={["matchRegexp:^[0-9.-]*$"]}
                  errorMessages={["Invalid Long Value"]}
                  value={regFormData.longValue}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      longValue: e.target.value,
                    });
                  }}
                />

                <MyTextValidator
                  gridType="item"
                  xl={5.8}
                  lg={5.8}
                  md={5.8}
                  xs={5.8}
                  sm={5.8}
                  label="Mobile No"
                  type="text"
                  variant="outlined"
                  fullWidth
                  required={true}
                  validators={["matchRegexp:^[0-9\\-]{14}$"]}
                  errorMessages={["Invalid Mobile No"]}
                  value={regFormData.mobileNo}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      mobileNo: e.target.value,
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
                className={classes.register_btn_container}
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
                  <button className={classes.btn__register}>Register</button>
                </Grid>
              </Grid>
            </ValidatorForm>
          </Grid>
          {/* //-- User table */}
          <Grid
            container
            xl={12}
            lg={12}
            md={12}
            xs={12}
            sm={12}
            style={
              {
                //   border: "2px solid red",
              }
            }
            className={classes.table__container}
          >
            <Box
              sx={{
                // height: 300,
                width: "100%",
                boxShadow: 1,
                // border: 2,

                "& .header_color": {
                  // backgroundColor: "#2980b9",
                  color: "white",
                  background: "linear-gradient(280deg,#205a76,#2980b9)",
                  backgroundImage: `url("https://www.transparenttextures.com/patterns/vintage-speckles.png")`,
                  backgroundColor: "#273c75",
                },
              }}
            >
              <UserTable
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styleSheet)(Register);
