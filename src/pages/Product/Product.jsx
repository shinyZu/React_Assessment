import React, { useState, useEffect } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import sample_img from "../../assets/images/question.jpg";
import FileChooser from "../../components/FileChooser/FileChooser";
import MyTextValidator from "../../components/common/TextValidator/TextValidator.jsx";
import ProductService from "../../services/ProductService";
import MySnackBar from "../../components/common/Snackbar/MySnackbar";
import ConfirmDialog from "../../components/common/ConfirmDialog/ConfirmDialog";

function Product(props) {
  const { classes } = props;
  // const categories = ["Customer", "Admin", "Driver"];
  const [categories, setCategories] = useState([]);
  const [productFormData, setProductFormdata] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [userName, setUserName] = useState("");
  const [productImg, setProductImg] = useState(sample_img);

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
    getAllCategories();
  }, []);

  async function getAllCategories() {
    let res = await ProductService.getAllProductCategories();
    if (res.status === 200) {
      setCategories(res.data);
    }
  }

  async function saveProduct() {
    console.log(productFormData);

    if (productFormData.image != "") {
      console.log("empty");
      setConfirmDialog({
        isOpen: true,
        title: "Are you sure you want to Save this Product ?",
        subTitle: "You can't revert this operation",
        action: "Save",
        confirmBtnStyle: {
          backgroundColor: "rgb(26, 188, 156)",
          color: "white",
        },
        onConfirm: async () => {
          let res = await ProductService.saveProduct(productFormData);
          console.log(res);
          if (res.status === 200) {
            setOpenAlert({
              open: true,
              alert: "Product Saved Successfully",
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
    } else {
      setOpenAlert({
        open: true,
        alert: "Please Choose an Image for the Product!!",
        severity: "warning",
        variant: "standard",
      });
    }
  }

  function handleUpload(e) {
    const { files } = e.target;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const { result } = e.target;
      // console.log(files); // FileList {0: File, length: 1}
      // console.log(result); // data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/7QP0UGhvdG9zaG9wIDMuMAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQABOEJJTQQEAAAAAAOfHAFaAAMbJUccAQAAAgAEHAIAAAIABBwCBQAuTWFuIE9wZW4gR3JvY2VyeSBTdG9yZSBEb29yIEN1c3RvbWVyIHdpdGggRm9vZBwCGQAFc3RvcmUcAhkACSBjdXN0b21lchwCGQAMIHN1cGVybWFya2V0HAIZAAggZ3JvY2VyeRwCGQAHIG1hcmtldBwCGQAFIGZvb2QcAhkAByByZXRhaWwcAhkABiB3b21hbhwCGQAHIHBlb3BsZRwCGQAFIHNob3AcAhkAByBmZW1hbGUcAhkABSBzYWxlHAIZAAkgcHVyY2hhc2UcAhkACiB2ZWdldGFibGUcAhkABiBmcnVpdBwCGQAHIHZlY3RvchwCGQANIGlsbHVzdHJhdGlv........
      if (result) {
        setProductImg(result); // url
      }
    };
    fileReader.readAsDataURL(files[0]);
  }

  function clearFieldsOnClick() {
    setProductFormdata({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
    setProductImg(sample_img);
    setCategories([]);
    getAllCategories();
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
        style={
          {
            /* border: "2px solid red",  height: "80vh"*/
          }
        }
        justifyContent="center"
        alignItems="center"
        className={classes.product_container_1_0}
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
            // marginTop: "1%",
            padding: "50px 0px 10px 0px",
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
              <MyTextValidator
                gridtType="item"
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                label="Title"
                type="text"
                variant="outlined"
                fullWidth
                required={true}
                style={{ marginBottom: "7vh" }}
                validators={["matchRegexp:^[A-z0-9-\\s,']*$"]}
                errorMessages={["Invalid Title"]}
                value={productFormData.title}
                onChange={(e) => {
                  setProductFormdata({
                    ...productFormData,
                    title: e.target.value,
                  });
                }}
              />

              <MyTextValidator
                gridtType="item"
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
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
                  id="category"
                  disablePortal
                  inputValue={productFormData.category}
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

              <MyTextValidator
                gridtType="item"
                xl={5.8}
                lg={5.8}
                md={5.8}
                xs={5.8}
                sm={5.8}
                label="Description"
                type="text"
                variant="outlined"
                fullWidth
                multiline={true}
                minRows={2}
                required={true}
                // style={{ marginBottom: "7vh" }}
                value={productFormData.description}
                onChange={(e) => {
                  setProductFormdata({
                    ...productFormData,
                    description: e.target.value,
                  });
                }}
              />
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
              <img src={productImg} className={classes.product__img} />
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
                <FileChooser
                  text="Choose Image"
                  onUpload={(e) => {
                    handleUpload(e);
                    setProductFormdata({
                      ...productFormData,
                      image: e.target.files[0].name,
                    });
                    console.log(productFormData);
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

export default withStyles(styleSheet)(Product);
