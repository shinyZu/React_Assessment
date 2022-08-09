import React, { useEffect, useState } from "react";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style.js";
import { Grid } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Box from "@mui/material/Box";
import UserTable from "../../components/common/Table/Table";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MyTextValidator from "../../components/common/TextValidator/TextValidator.jsx";
import UserService from "../../services/UserService.js";
import MySnackBar from "../../components/common/Snackbar/MySnackbar";
import ConfirmDialog from "../../components/common/ConfirmDialog/ConfirmDialog";

function Register(props) {
  const { classes } = props;

  const [regFormData, setRegFormData] = useState({
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  });

  const [openAlert, setOpenAlert] = useState({
    open: "",
    alert: "",
    severity: "",
    variant: "",
  });

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    confirmBtnStyle: {},
    action: "",
  });

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
                    loadDataToFields(cellValues.id, users[cellValues.id]);
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
                    deleteUser(users[cellValues.id]);
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
      field: "firstname",
      headerName: "First Name",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "lastname",
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
      field: "number",
      headerName: "Street No",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "zipcode",
      headerName: "Zip Code",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "lat",
      headerName: "Lat Value",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "long",
      headerName: "Long Value",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "phone",
      headerName: "Mobile No",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },
  ];

  const [users, setUsers] = useState([]);

  const [btnProps, setBtnProps] = useState({
    btnLabel: "Register",
    btnColor: "#1abc9c",
  });

  const [id, setId] = useState("");

  function clearFieldsOnClick() {
    setBtnProps({ btnLabel: "Register", btnColor: "#1abc9c" });
    setRegFormData({
      email: "",
      username: "",
      password: "",
      name: {
        firstname: "",
        lastname: "",
      },
      address: {
        city: "",
        street: "",
        number: "",
        zipcode: "",
        geolocation: {
          lat: "",
          long: "",
        },
      },
      phone: "",
    });
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  async function getAllUsers() {
    let res = await UserService.getAllUsers();
    console.log(res);
    if (res.status === 200) {
      setUsers(() => {
        return [...res.data];
      });
      console.log(users);
    }
  }

  // let userId;
  async function loadDataToFields(rowId, user) {
    console.log(user);
    // userId = rowId + 1;
    // console.log(userId);
    setId(rowId + 1);
    setBtnProps({ btnLabel: "Edit User Details", btnColor: "rgb(74 102 165)" });
    setRegFormData({
      email: user.email,
      username: user.username,
      password: user.password,
      name: {
        firstname: user.name.firstname,
        lastname: user.name.lastname,
      },
      address: {
        city: user.address.city,
        street: user.address.street,
        number: user.address.number,
        zipcode: user.address.zipcode,
        geolocation: {
          lat: user.address.geolocation.lat,
          long: user.address.geolocation.long,
        },
      },
      phone: user.phone,
    });
  }

  function registerUser() {
    console.log(regFormData);
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure you want to Register ?",
      subTitle: "Your username will be " + regFormData.username,
      action: "Save",
      confirmBtnStyle: {
        backgroundColor: "rgb(26, 188, 156)",
        color: "white",
      },
      onConfirm: async () => {
        let res = await UserService.registerUser(regFormData);
        console.log(res);
        if (res.status === 200) {
          setOpenAlert({
            open: true,
            alert: "User Registered Successfully",
            severity: "success",
            variant: "standard",
          });
          getAllUsers();
          clearFieldsOnClick();
          setConfirmDialog({ isOpen: false });
        } else {
          setConfirmDialog({ isOpen: false });
          setOpenAlert({
            open: true,
            alert: res.response.data,
            severity: "error",
            variant: "standard",
          });
        }
      },
    });
  }

  function updateUser() {
    console.log(id);
    console.log(regFormData);
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure you want to Update User Details ?",
      subTitle: "You can't revert this operation",
      // confirmBtnStyle: {
      //   backgroundColor: "rgb(26, 188, 156)",
      //   color: "white",
      // },
      confirmBtnStyle: { backgroundColor: "#2c4ea9", color: "white" },
      onConfirm: async () => {
        let res = await UserService.updateUser(id, regFormData);
        console.log(res);
        if (res.status === 200) {
          setOpenAlert({
            open: true,
            alert: "User Updated Successfully",
            severity: "success",
            variant: "standard",
          });
          clearFieldsOnClick();
          getAllUsers();
          setConfirmDialog({ isOpen: false });
        } else {
          setConfirmDialog({ isOpen: false });
          setOpenAlert({
            open: true,
            alert: res.response.data,
            severity: "error",
            variant: "standard",
          });
        }
      },
    });
  }

  function deleteUser(user) {
    console.log(user);
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure you want to remove this User?",
      subTitle: "You can't revert this operation",
      confirmBtnStyle: { backgroundColor: "red", color: "white" },
      action: "Delete",
      onConfirm: async () => {
        console.log(user.id);
        let res = await UserService.deleteUser(user.id);
        if (res.status === 200) {
          setOpenAlert({
            open: true,
            alert: "User Deleted Succesfully!",
            severity: "success",
            variant: "standard",
          });
          getAllUsers();
          clearFieldsOnClick();
          setConfirmDialog({ isOpen: false });
        } else {
          setConfirmDialog({ isOpen: false });
          setOpenAlert({
            open: true,
            alert: res.response.data,
            severity: "error",
            variant: "standard",
          });
        }
      },
    });
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
        className={classes.register_container_1_0}
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
            <Typography
              variant="h4"
              color="#405180" /* style={{ border: "2px solid red" }} */
            >
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
            <ValidatorForm
              // onSubmit={registerUser} style={{ width: "100%" }}
              onSubmit={
                btnProps.btnLabel == "Register" ? registerUser : updateUser
              }
              style={{ width: "100%" }}
            >
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
                  // validators={["matchRegexp:^[A-z]*$"]}
                  // errorMessages={["Invalid Name"]}
                  value={regFormData.name.firstname}
                  onChange={(e) => {
                    setRegFormData((prev) => ({
                      ...prev,
                      name: { ...prev.name, firstname: e.target.value },
                    }));
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
                  // validators={["matchRegexp:^[A-z]*$"]}
                  // errorMessages={["Invalid Name"]}
                  value={regFormData.name.lastname}
                  onChange={(e) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   lastname: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      name: { ...prev.name, lastname: e.target.value },
                    }));
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
                  // validators={["matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$"]}
                  // errorMessages={["Invalid Email Address"]}
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
                  // validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                  // errorMessages={["must have atleast 8 characters"]}
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
                  // validators={["matchRegexp:^[A-z0-9]*$"]}
                  // errorMessages={["Invalid City Name"]}
                  value={regFormData.address.city}
                  onChange={(e) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   city: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      address: { ...prev.address, city: e.target.value },
                    }));
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
                  // validators={["matchRegexp:^[A-z0-9\\s]*$"]}
                  // errorMessages={["Invalid Street Name"]}
                  value={regFormData.address.street}
                  onChange={(e) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   street: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      address: { ...prev.address, street: e.target.value },
                    }));
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
                  value={regFormData.address.number}
                  onChange={(e) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   number: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      address: { ...prev.address, number: e.target.value },
                    }));
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
                  value={regFormData.address.zipcode}
                  onChange={(e) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   zipcode: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      address: { ...prev.address, zipcode: e.target.value },
                    }));
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
                  // minlength="0.0"
                  // maxlength="8"
                  variant="outlined"
                  fullWidth
                  required={true}
                  // validators={["matchRegexp:^[0-9.-]*$"]}
                  // errorMessages={["Invalid Lat Value"]}
                  value={regFormData.address.geolocation.lat}
                  onChange={(e, v) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   lat: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        geolocation: {
                          ...prev.address.geolocation,
                          lat: e.target.value,
                        },
                      },
                    }));
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
                  // validators={["matchRegexp:^[0-9.-]*$"]}
                  // errorMessages={["Invalid Long Value"]}
                  value={regFormData.address.geolocation.long}
                  onChange={(e, v) => {
                    // setRegFormData({
                    //   ...regFormData,
                    //   long: e.target.value,
                    // });
                    setRegFormData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        geolocation: {
                          ...prev.address.geolocation,
                          long: e.target.value,
                        },
                      },
                    }));
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
                  value={regFormData.phone}
                  onChange={(e) => {
                    setRegFormData({
                      ...regFormData,
                      phone: e.target.value,
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
                  <button
                    className={classes.btn__register}
                    style={{ backgroundColor: btnProps.btnColor }}
                  >
                    {btnProps.btnLabel}
                  </button>
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
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                rows={users.map((user, index) => ({
                  id: user.id,
                  firstname: user.name.firstname,
                  lastname: user.name.lastname,
                  email: user.email,
                  username: user.username,
                  city: user.address.city,
                  street: user.address.street,
                  number: user.address.number,
                  zipcode: user.address.zipcode,
                  lat: user.address.geolocation.lat,
                  long: user.address.geolocation.long,
                  phone: user.phone,
                }))}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          xl={11}
          lg={11}
          md={11}
          xs={11}
          sm={11}
          // style={{ border: "2px solid red" }}
          justifyContent="end"
        >
          <div /* className={classes.login__footer} */>
            <p>
              Back To Login Screen? &nbsp; <Link to="/">Login</Link>
            </p>
          </div>
        </Grid>
      </Grid>

      <MySnackBar
        open={openAlert.open}
        alert={openAlert.alert}
        severity={openAlert.severity}
        variant={openAlert.variant}
        onClose={() => {
          setOpenAlert({ open: false });
        }}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}

export default withStyles(styleSheet)(Register);
