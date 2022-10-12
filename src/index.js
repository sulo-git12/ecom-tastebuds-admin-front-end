import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Layout/NavigationBar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Outlet from "./pages/Outlet";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/master.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavigationBar />

    <Routes>
      <Route path="/Admin/Home" element={<Home />} />
      <Route path="/Admin/Item" element={<Item />} />
      <Route path="/Admin/Outlet" element={<Outlet />} />
      <Route path="/Admin/Profile" element={<Profile />} />
    </Routes>

    <Footer />
  </Router>
);
