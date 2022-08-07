import React, { useEffect, useState, Redirect, useHistory } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login__img from "../../assets/images/store5.jpg";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style.js";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import MyTextField from "../../components/common/TextField/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Grid } from "@mui/material";
// import { useAuth } from "../Session/Auth";
import MySnackBar from "../../components/common/Snackbar/MySnackbar";

function Login(props) {
  const { classes } = props;
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    userStatus: "",
  });

  const [openErrorMessage, setOpenErrorMessage] = useState({
    open: "",
    alert: "",
    severity: "",
    variant: "",
  });

  return (
    <>
      <div className={classes.login__overlay}>
        <div className={classes.login__container}>
          <img src={login__img} className={classes.login__left} width="400px" />

          <div className={classes.login__right}>
            <p className={classes.login__closeBtn} onClick={props.onClose}>
              {/* X */}
            </p>

            <div className={classes.login__title}>
              <Typography className={classes.font__family} variant="h4">
                Login
              </Typography>
              <PersonIcon className={classes.login__icon} />
            </div>

            <ValidatorForm className="pt-2" /* onSubmit={logUser} */>
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
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required={true}
                    // style={{ marginBottom: "5px" }}
                    // style={{ marginLeft: "10px" }}
                    validators={[
                      "matchRegexp:^[A-z|0-9]{4,}@(gmail)(.com|.lk)$",
                    ]}
                    errorMessages={["invalid email address"]}
                    value={loginFormData.email}
                    onChange={(e) => {
                      setLoginFormData({
                        ...loginFormData,
                        email: e.target.value,
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
                    validators={["matchRegexp:^[A-z|0-9|@]{8,}$"]}
                    errorMessages={["must have atleast 8 characters"]}
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
                <Link
                  to="/register"
                  // onClick={() => {
                  //   props.onSwitch();
                  // }}
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
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
