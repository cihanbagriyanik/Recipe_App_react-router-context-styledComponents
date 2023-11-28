import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>

          <Route path="/details" element={<Details />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
