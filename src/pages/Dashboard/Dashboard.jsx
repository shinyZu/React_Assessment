import React, { useEffect, useState } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MyCard from "../../components/Card/Card";
import { useLocation } from "react-router-dom";
import UserService from "../../services/UserService";
import ProductService from "../../services/ProductService";
import CartService from "../../services/CartService";

function Dashboard(props) {
  const { classes } = props;
  const [card1, setCard1] = useState("00");
  const [card2, setCard2] = useState("00");
  const [card3, setCard3] = useState("00");

  const [userName, setUserName] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    // console.log(state.username);
    // setUserName(state.username);
    // console.log(userName);
    // localStorage.setItem("userName", JSON.stringify(state.username));
    // console.log(JSON.parse(localStorage.getItem("userName")));
    setUserName(JSON.parse(localStorage.getItem("userName")));

    getUserCount();
    getProductCount();
    getCartCount();
  }, []);

  async function getUserCount() {
    let res = await UserService.getAllUsers();
    if (res.status === 200) {
      let count;
      if (res.data.length < 10) {
        count = "0" + res.data.length;
      } else {
        count = res.data.length;
      }
      setCard1(count);
    }
  }

  async function getProductCount() {
    let res = await ProductService.getAllProducts();
    console.log(res);
    if (res.status === 200) {
      let count;
      if (res.data.length < 10) {
        count = "0" + res.data.length;
      } else {
        count = res.data.length;
      }
      setCard2(count);
    }
  }

  async function getCartCount() {
    let res = await CartService.getAllCarts();
    if (res.status === 200) {
      let count;
      if (res.data.length < 10) {
        count = "0" + res.data.length;
      } else {
        count = res.data.length;
      }
      setCard3(count);
    }
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
        className={classes.dashboard_container_1_0}
        justifyContent="center"
        alignItems="center"
        // style={{ border: "2px solid red" }}
      >
        <Grid
          container
          xl={11}
          lg={11}
          md={12}
          sm={12}
          xs={12}
          className={classes.dashboard_container_1_1}
          // justifyContent="space-between"
          justifyContent="center"
          alignItems="center"
          style={
            {
              // border: "2px solid red" /* , width: "100vw", height: "100vh" */,
            }
          }
        >
          <MyCard cardNo={card1} cardTitle="Users" color="#f1c40f" />
          <MyCard cardNo={card2} cardTitle="Products" color="#9b59b6" />
          <MyCard cardNo={card3} cardTitle="Cart" color="#2ecc71" />
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styleSheet)(Dashboard);
