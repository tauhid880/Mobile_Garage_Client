import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-slate-200">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 text-slate-200 bg-slate-700">
            <li>
              <Link to="/orders">My orders</Link>
            </li>
            <li>
              <Link to="/addproduct">Add A product</Link>
            </li>
            <li>
              <Link to="/products">My Products</Link>
            </li>
            <li>
              <Link to="/allsellers">All Sellers</Link>
            </li>
            <li>
              <Link to="/allbuyers">All Buyers</Link>
            </li>
            <li>
              <Link to="/reporteditems">Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
