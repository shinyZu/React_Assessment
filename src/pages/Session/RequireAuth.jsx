import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function RequireAuth({ children }) {
  const location = useLocation();
  const storage = localStorage;
  console.log(storage);

  if (storage.length == 0) {
    console.log("User still not login... cannot access profile");
    return <Navigate to="*" /* state={{ path: location.pathname }}  */ />;
  }
  return children;
}

export default RequireAuth;
