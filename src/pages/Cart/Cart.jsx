import React, { useState, useEffect } from "react";
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
import UserService from "../../services/UserService.js";
import ProductService from "../../services/ProductService.js";

function Cart(props) {
  const { classes } = props;
  // const categories = ["Customer", "Admin", "Driver"];
  const [date, setDate] = useState(null);
  const [cartFormData, setCartFormData] = useState({
    userId: "",
    date: "",
    productId: "",
    quantity: "",
  });

  const [usernameList, setUsernameList] = useState([]);
  const [titleList, setTitleList] = useState([]);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("userName")));
    getUsernames();
    getProductTitles();
  }, []);

  async function getUsernames() {
    let res = await UserService.getAllUsers();
    // console.log(res);
    if (res.status === 200) {
      let userList = res.data;
      // console.log(userList);
      setUsernameList([]);
      userList.map((user, index) => {
        // let temp = { userId: user.id, username: user.username };
        setUsernameList((prev) => {
          return [...prev, { userId: user.id, username: user.username }];
        });
      });
      console.log(usernameList);
    }
  }
  async function getProductTitles() {
    let res = await ProductService.getAllProducts();
    // console.log(res);
    if (res.status === 200) {
      let productList = res.data;
      // console.log(userList);
      setTitleList([]);
      productList.map((product, index) => {
        setTitleList((prev) => {
          return [...prev, { productId: product.id, title: product.title }];
        });
      });
      console.log(titleList);
    }
  }
  function saveOrder() {
    console.log(cartFormData);
  }
  function clearFieldsOnClick() {}
  return (
    <>
      <Navbar username={userName} />
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        // style={{ /* border: "2px solid red", */ height: "80vh" }}
        justifyContent="center"
        alignItems="center"
        className={classes.cart_container_1_0}
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
                  options={usernameList}
                  getOptionLabel={(option) => option.username}
                  renderInput={(params) => (
                    <TextField {...params} label="Username" />
                  )}
                  style={{ marginBottom: "7vh" }}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    console.log(v);
                    setCartFormData({
                      ...cartFormData,
                      userId: v.userId,
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
                      setCartFormData({
                        ...cartFormData,
                        date: newValue,
                      });
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
                  options={titleList}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Title" />
                  )}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    console.log(v);
                    setCartFormData({
                      ...cartFormData,
                      productId: v.productId,
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
                onChange={(e, v) => {
                  setCartFormData({
                    ...cartFormData,
                    // qty: e.target.value,
                    quantity: e.target.value,
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
