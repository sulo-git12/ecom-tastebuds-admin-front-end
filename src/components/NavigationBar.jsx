import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/Admin/Home">Home</Link>
          <Link to="/Admin/Item">Item</Link>
          <Link to="/Admin/Outlet">Outlet</Link>
          <Link to="/Admin/Profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
