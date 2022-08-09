import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function RequireAuth({ children }) {
  //   console.log(children);
  // const auth = useAuth();
  // const location = useLocation();
  // console.log(auth);
  // console.log(location);
  const storage = localStorage;
  console.log(storage);

  if (storage.length == 0) {
    console.log("User still not login... cannot access profile");
    // return <Navigate to="/testLogin" state={{ path: location.pathname }} />;
    return <Navigate to="*" />;
  }
  return children;
}

export default RequireAuth;
