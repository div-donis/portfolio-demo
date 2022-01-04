import React from "react";
import { Routes, Link, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
        </Routes>
      </div>
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="orders">Orders</Link>
        </li>
        <li>
          <Link to="quotes">Quotes</Link>
        </li>
      </ul>
    </div>
  );
};

export const Profile = () => {
  return <></>;
};
export const Orders = () => {
  return <></>;
};
export const Quotes = () => {
  return <></>;
};

export default Dashboard;
