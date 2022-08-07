export const styleSheet = {
  login__overlay: {
    // border: "2px solid red",
    backgroundColor: " rgba(0, 0, 0, 0.2)",
    // backgroundImage: `url("https://www.transparenttextures.com/patterns/transparent-square-tiles.png")`,
    backgroundImage: `url("https://www.transparenttextures.com/patterns/wall-4-light.png")`,
    backgroundColor: "#ffffff !important",
    height: "99vh",
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
    display: "flex",
  },

  login__left: {
    // border: "2px solid pink",
    margin: "40px 10px",
    opacity: "0.9",
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
    color: "#4c5887",
  },

  login__icon: {
    fontSize: "80px !important",
    color: "#4c5887 !important",
  },

  login__content: {
    // border: "2px solid orange",
    padding: "10px 25px",
  },

  login_btn_container: {
    // border: "2px solid blue",
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },

  btn__login: {
    backgroundColor: "#4c5887",
    // backgroundColor: "#4169a9",
    color: "white",
    padding: "15px",
    width: "100%",
    borderRadius: "5px",
    border: "none",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#273c75",
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
};
