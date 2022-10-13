import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/Admin/Home">TasteBuds-Admin</Link>
          <Link to="/Admin/Item">Item</Link>
          <Link to="/Admin/Outlet">Outlet</Link>
          <Link to="/Admin/EditOutlet">Edit Outlet</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
