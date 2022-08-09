import React, { useEffect, useState, Redirect, useHistory } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login__img from "../../assets/images/store8.png";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style.js";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import MyTextField from "../../components/common/TextField/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Grid } from "@mui/material";
// import { useAuth } from "../Session/Auth";
import MySnackBar from "../../components/common/Snackbar/MySnackbar";
import Paper from "@mui/material/Paper";
import LoginService from "../../services/LoginService";
import jwt_decode from "jwt-decode";

function Login(props) {
  const { classes } = props;
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const [openErrorMessage, setOpenErrorMessage] = useState({
    open: "",
    alert: "",
    severity: "",
    variant: "",
  });

  const [usernameFromToken, setUsernameFromToken] = useState("");

  const navigate = useNavigate();

  async function userLogin() {
    // console.log(loginFormData);

    let res = await LoginService.userLogin(loginFormData);
    console.log(res);
    if (res.status === 200) {
      setUsernameFromToken(res.data.token);
      // console.log(jwt_decode(usernameFromToken).user);
      localStorage.setItem(
        "userName",
        JSON.stringify(jwt_decode(usernameFromToken).user)
      );
      console.log(localStorage.length);
      if (localStorage.length == 0) {
        navigate("*");
      } else {
        navigate(
          "/dashboard" /* , {
          state: { username: jwt_decode(usernameFromToken).user },
        } */
        );
      }
    } else {
      setOpenErrorMessage({
        open: true,
        alert: res.response.data,
        severity: "error",
        variant: "standard",
      });
    }
  }

  return (
    <>
      <div className={classes.login__overlay}>
        <Paper
          sx={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png"); !important`,
          }}
          elevation={12}
          style={{
            borderRadius: "20px",
          }}
          className={classes.login__container}
        >
          <img src={login__img} className={classes.login__left} width="380px" />

          <p className={classes.login__closeBtn} onClick={props.onClose}>
            {/* X */}
          </p>

          <Paper
            sx={{
              p: "20px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            elevation={0}
            style={{
              borderRadius: "20px",
            }}
            className={classes.login__right}
          >
            <div className={classes.login__title}>
              <Typography className={classes.font__family} variant="h4">
                Login
              </Typography>
              <PersonIcon className={classes.login__icon} />
            </div>

            <ValidatorForm className="pt-2" onSubmit={userLogin}>
              <Grid
                container
                lg={12}
                md={12}
                xs={12}
                sm={12}
                // style={{ border: "2px solid red" }}
                rowGap={2}
                className={classes.login__content}
              >
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                  sm={12}
                  // style={{ border: "2px solid red" }}
                  // className={classes.register__content}
                >
                  <TextValidator
                    // id="outlined-basic"
                    label="Username"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required={true}
                    // style={{ marginBottom: "5px" }}
                    // style={{ marginLeft: "10px" }}
                    validators={["matchRegexp:^[A-z0-9-]*$"]}
                    // errorMessages={["Invalid email address"]}
                    value={loginFormData.username}
                    onChange={(e) => {
                      setLoginFormData({
                        ...loginFormData,
                        username: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid
                  // container
                  item
                  lg={12}
                  md={12}
                  xs={12}
                  sm={12}
                  // style={{ border: "2px solid red" }}
                  // className={classes.login__content}
                >
                  <TextValidator
                    // id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required={true}
                    style={{ marginBottom: "5px" }}
                    // style={{ marginLeft: "10px" }}
                    // validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                    // errorMessages={["must have atleast 8 characters"]}
                    value={loginFormData.password}
                    onChange={(e) => {
                      setLoginFormData({
                        ...loginFormData,
                        password: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid
                  container
                  lg={12}
                  md={12}
                  xs={12}
                  sm={12}
                  // style={{ border: "2px solid red" }}
                  // className={classes.register__content}
                  className={classes.login_btn_container}
                >
                  <button className={classes.btn__login}>Login</button>
                </Grid>
              </Grid>
            </ValidatorForm>

            <div className={classes.login__footer}>
              <p>
                Create a new user account? &nbsp;{" "}
                <Link to="/register">Register</Link>
              </p>
            </div>
          </Paper>
        </Paper>
      </div>
      <MySnackBar
        open={openErrorMessage.open}
        alert={openErrorMessage.alert}
        severity={openErrorMessage.severity}
        variant={openErrorMessage.variant}
        onClose={() => {
          setOpenErrorMessage({ open: false });
        }}
      />
    </>
  );
}

// export default Login;
export default withStyles(styleSheet)(Login);
