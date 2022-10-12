import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link key={0} to="/Admin/Home" className="brand-name">
            TasteBuds
          </Link>
          <Link key={1} to="/Admin/Home">
            Home
          </Link>
          <Link key={2} to="/Admin/Item">
            Item
          </Link>
          <Link key={3} to="/Admin/Outlet">
            Outlet
          </Link>
          <Link key={4} to="/Admin/Profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
