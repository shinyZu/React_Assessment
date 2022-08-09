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
import Box from "@mui/material/Box";
import CartTable from "../../components/common/Table/Table";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CartService from "../../services/CartService.js";
import MySnackBar from "../../components/common/Snackbar/MySnackbar";
import ConfirmDialog from "../../components/common/ConfirmDialog/ConfirmDialog";

function Cart(props) {
  const { classes } = props;
  // const categories = ["Customer", "Admin", "Driver"];
  const [date, setDate] = useState(null);
  const [cartFormData, setCartFormData] = useState({
    userId: "",
    date: "",
    products: [
      /* { productId: "", quantity: "" } */
    ],
  });

  const [name, setName] = useState("");
  const [titles, setTitles] = useState([]);
  const [qtys, setQtys] = useState([]);

  const [usernameList, setUsernameList] = useState([]);
  const [titleList, setTitleList] = useState([]);
  const [qtyList, setQtyList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const [userName, setUserName] = useState("");

  const columns = [
    {
      field: "id",
      headerName: "Actions",
      renderCell: (cellValues) => {
        return (
          <>
            <Tooltip title="Edit">
              <IconButton>
                <EditIcon
                  color="black"
                  onClick={() => {
                    console.log("clicked row : " + cellValues.id);
                    // loadDataToFields(cellValues.id, users[cellValues.id]);
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon
                  onClick={() => {
                    console.log("clicked row : " + cellValues.id);
                    // deleteUser(users[cellValues.id]);
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
      field: "productId",
      headerName: "Product ID",
      width: 130,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "category",
      headerName: "Category",
      width: 299,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "title",
      headerName: "Product Title",
      width: 399,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },

    {
      field: "price",
      headerName: "Price",
      width: 180,
      headerClassName: "header_color",
      headerAlign: "center",
      align: "Center",
    },
  ];

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

  async function saveOrder() {
    // console.log(e);
    console.log(cartFormData);
    console.log(titles);
    console.log(qtys);
    // if (e.target.innerText === "Save") {
    if (
      cartFormData.userId != "" &&
      cartFormData.date != "" &&
      titles.length != 0 &&
      qtys.length != 0 &&
      titles.length == qtys.length
    ) {
      setConfirmDialog({
        isOpen: true,
        title: "Are you sure you want to Save this Cart ?",
        subTitle: "You can't revert this operation",
        action: "Save",
        confirmBtnStyle: {
          backgroundColor: "rgb(26, 188, 156)",
          color: "white",
        },
        onConfirm: async () => {
          let res = await CartService.saveCart(cartFormData);
          console.log(res);
          if (res.status === 200) {
            setOpenAlert({
              open: true,
              alert: "Cart Saved Successfully",
              severity: "success",
              variant: "standard",
            });
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
    } else if (titles.length != qtys.length) {
      setOpenAlert({
        open: true,
        alert: "Title count & Quantity count doesn't match!!!",
        severity: "error",
        variant: "standard",
      });
    } else {
      setOpenAlert({
        open: true,
        alert: "Please fill all the fields!!!",
        severity: "error",
        variant: "standard",
      });
    }
  }

  function clearFieldsOnClick() {
    setConfirmDialog({ isOpen: false });
    // console.log(e);
    console.log("entered");
    setCartFormData({
      userId: "",
      date: "",
      products: [],
    });
    setName("");
    // console.log(titles);
    setTitles([]);
    setQtys([]);
    setDate(null);
  }

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
            // marginTop: "2%",
            // padding: "10px 0px 10px 0px",
            height: "fit-content",
            // height: "350px",
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
                md={12}
                xs={12}
                sm={12}
                // style={{ border: "2px solid blue" }}
              >
                <Autocomplete
                  disablePortal
                  id="username"
                  options={usernameList}
                  getOptionLabel={(option) => option.username}
                  // isOptionEqualToValue={(option, value) =>
                  //   option.id === value.id
                  // }
                  // inputValue={usernameList.map((u, index) => {
                  //   if (u.userId === cartFormData.userId) {
                  //     console.log(u.userId);
                  //     console.log(cartFormData.userId);
                  //     return u.username;
                  //   }
                  // })}
                  inputValue={name}
                  required={true}
                  renderInput={(params) => (
                    <TextField {...params} label="Username" />
                  )}
                  style={{ marginBottom: "7vh" }}
                  disabledItemsFocusable
                  onChange={(e, v) => {
                    console.log(v);
                    setName(v.username);
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
                md={12}
                xs={12}
                sm={12}
                // style={{ border: "2px solid blue" }}
                style={{ marginBottom: "7vh" }}
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
                md={12}
                xs={12}
                sm={12}
                // style={{ border: "2px solid blue" }}
                style={{ marginBottom: "7vh" }}
              >
                <Autocomplete
                  // disablePortal
                  multiple
                  // freeSolo
                  filterSelectedOptions
                  id="title"
                  options={titleList}
                  value={titles}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Title" />
                  )}
                  onChange={(e, value) => {
                    console.log(value);
                    setTitles(value);
                    let formData = cartFormData;
                    formData.products = [];
                    value.map((v) => {
                      console.log(v);
                      formData.products.push({
                        productId: v.productId,
                        quantity: 1,
                      });
                    });

                    console.log(formData);
                    setCartFormData(formData);
                    console.log(cartFormData);
                  }}
                  disabledItemsFocusable
                  // onChange={(e, value) => {

                  //   let formData = cartFormData;
                  //   formData.products = [];
                  //   value.map((v) => {
                  //     console.log(v);
                  //     formData.products.push({
                  //       productId: v.productId,
                  //       quantity: 1,
                  //     });
                  //   });

                  //   console.log(formData);
                  //   setCartFormData(formData);
                  //   console.log(cartFormData);
                  // }}
                />
              </Grid>

              <Grid
                item
                xl={5.8}
                lg={5.8}
                md={12}
                xs={12}
                sm={12}
                // style={{ border: "2px solid blue" }}
              >
                <Autocomplete
                  disablePortal
                  multiple
                  disabledItemsFocusable
                  id="quantity"
                  options={qtyList}
                  value={qtys}
                  // getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField {...params} label="Quantity" />
                  )}
                  onChange={(e, value) => {
                    console.log(value);
                    setQtys(value);
                    let formData = cartFormData;
                    formData.products.map((p, index) => {
                      console.log(p);
                      console.log(value);
                      p.quantity = value[index];
                    });
                    setCartFormData(formData);
                    console.log(cartFormData);
                  }}

                  // onChange={(e, value) => {
                  //   let formData = cartFormData;
                  //   formData.products.map((p, index) => {
                  //     console.log(p);
                  //     console.log(value);
                  //     p.quantity = value[index];
                  //   });
                  //   setCartFormData(formData);
                  //   console.log(cartFormData);
                  // }}
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
              className={classes.save_btn_container}
              justifyContent="end"
            >
              {/* <Grid
                container
                xl={6}
                lg={6}
                md={6}
                xs={6}
                sm={6}
                // style={{ border: "2px solid red" }}
                justifyContent="start"
              >
                <button
                  className={classes.btn__addToCart}
                  onClick={addToCartOnClick}
                >
                  Add To Cart
                </button>
              </Grid> */}
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
                  type="button"
                >
                  Clear
                </button>
                <button
                  className={classes.btn__save}
                  /* onClick={saveOrder} */
                >
                  Save
                </button>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Grid>
        {/* <Grid
          container
          xl={11}
          lg={11}
          md={11}
          xs={11}
          sm={11}
          style={{
            // border: "2px solid red",
            margin: " 50px auto",
            height: "50vh",
          }}
          // className={classes.table__container}
        >
          <Box
            sx={{
              width: "100%",
              boxShadow: 1,

              "& .header_color": {
                color: "white",
                background: "linear-gradient(280deg,#205a76,#2980b9)",
                backgroundImage: `url("https://www.transparenttextures.com/patterns/vintage-speckles.png")`,
                backgroundColor: "#305692",
              },
            }}
          >
            <CartTable
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              rows={cart.map((item, index) => ({
                id: item.productId,
                productId: item.productId,
                category: item.category,
                title: item.title,
                quantity: item.quantity,
                price: item.price,
              }))}
              // rows={rows}
            />
          </Box>
        </Grid> */}
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

export default withStyles(styleSheet)(Cart);
