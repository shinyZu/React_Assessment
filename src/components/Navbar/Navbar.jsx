import React, { useState } from "react";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ConfirmDialog from "../common/ConfirmDialog/ConfirmDialog";

function Navbar(props) {
  const { classes } = props;
  const [value, setValue] = useState("");

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
    confirmBtnStyle: {},
    action: "",
  });

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgb(244 249 0)" : "normal",
    };
  };

  const navigate = useNavigate();

  function changePage() {}
  function handleCustomerLogout() {
    setConfirmDialog({
      isOpen: true,
      title: props.username + ", Are you sure you want to Logout ?",
      subTitle: "You can't revert this operation",
      action: "Yes",
      confirmBtnStyle: {
        backgroundColor: "#2c4ea9",
        color: "white",
      },
      onConfirm: () => {
        navigate("/");
      },
    });
  }

  return (
    <>
      <Box
        className={classes.nav__bar}
        style={{ backgroundColor: "rgb(28 48 98)" }}
      >
        <Tabs value={value} onChange={changePage} className={classes.nav__tabs}>
          <div className={classes.nav_left}>
            <NavLink
              smooth
              to="/dashboard"
              className={classes.nav__text}
              style={navLinkStyle}
            >
              <Tab
                icon={<GridViewIcon />}
                className={classes.nav__text}
                label="Dashboard"
              />
            </NavLink>

            <NavLink
              smooth
              to="/product"
              className={classes.nav__text}
              style={navLinkStyle}
            >
              <Tab
                icon={<CategoryIcon />}
                className={classes.nav__text}
                label="Product"
              />
            </NavLink>

            <NavLink
              smooth
              to="/cart"
              className={classes.nav__text}
              style={navLinkStyle}
            >
              <Tab
                icon={<ShoppingCartIcon />}
                className={classes.nav__text}
                label="Cart"
              />
            </NavLink>
          </div>
          <div className={classes.nav__right}>
            <NavLink
              smooth
              to="/profile"
              className={classes.nav__text}
              style={navLinkStyle}
            >
              <Tab
                icon={<AccountCircleIcon />}
                className={classes.nav__text}
                label={props.username}
              />
            </NavLink>
            <NavLink
              smooth
              to="#"
              className={classes.nav__text}
              // style={navLinkStyle}
            >
              <Tab
                icon={<LogoutIcon />}
                className={classes.nav__text}
                label="Logout"
                onClick={handleCustomerLogout}
              />
            </NavLink>
          </div>
        </Tabs>
      </Box>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}

export default withStyles(styleSheet)(Navbar);
