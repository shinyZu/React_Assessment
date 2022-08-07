import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
