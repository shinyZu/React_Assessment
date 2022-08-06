import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
