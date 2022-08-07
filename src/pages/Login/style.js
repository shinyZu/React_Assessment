export const styleSheet = {
  login__overlay: {
    // border: "2px solid red",
    backgroundColor: " rgba(0, 0, 0, 0.2)",
  },

  login__container: {
    // border: "2px solid green",
    maxWidth: "770px",
    maxHeight: "500px",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "10px",
    right: "0",
    bottom: "0",
    left: "0",
    margin: "auto",
    // transform: "translate(-50%, -50%)",
    display: "flex",
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 18px 0px rgba(0, 0, 0, 0.75)",
    borderRadius: "30px",
    borderBottomLeftRadius: "140px",
  },

  login__left: {
    // border: "2px solid pink",
    opacity: "0.9",
    borderTopRightRadius: "140px",
    borderBottomLeftRadius: "140px",
  },

  login__right: {
    // border: "2px solid blue",
    width: "100%",
    // backgroundImage: `url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");`,
    backgroundColor: "#ffffff",
    borderTopRightRadius: "5%",
    borderBottomRightRadius: "5%",
  },

  login__closeBtn: {
    // border: "2px solid black",
    height: "20px",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },

  login__title: {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#449c6e",
    // color: "#4169a9",
  },

  login__icon: {
    fontSize: "80px !important",
    color: "#449c6e !important",
  },

  login__content: {
    // border: "2px solid orange",
    padding: "10px 25px",
    // marginTop: "10%",
  },

  login_btn_container: {
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },

  btn__login: {
    backgroundColor: "#449c6e",
    // backgroundColor: "#4169a9",
    color: "white",
    padding: "15px",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      cursor: "pointer",
      // backgroundColor: "#16a085",
      backgroundColor: "#22995b",
    },
  },

  login__footer: {
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
    padding: "0px",
    fontSize: "14px",
    marginTop: "-15px",
  },

  font__family: {
    // fontFamily: '"Acme", sans-serif !important',
  },
};
