import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

function Profile() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("userName")));
  }, []);

  return (
    <>
      <Navbar username={userName} />
    </>
  );
}

export default Profile;
