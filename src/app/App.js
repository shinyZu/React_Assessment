import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/Session/NotFound";
import RequireAuth from "../pages/Session/RequireAuth";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <RequireAuth>
              <Product />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
