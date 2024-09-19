import React from "react";
import { Link, Outlet } from "react-router-dom";
import navlogo from "../assets/Group 9283.svg";
import OffCanvass from "../lib/OffCanvass";
const Navbar = () => {
  return (
    <>
      <nav className="container py-4 d-flex justify-content-between align-items-center">
        <div className="d-flex  gap-2">
          <img src={navlogo} alt="nav-logo" />
          <h2 className="d-none d-lg-block">Perfume House</h2>
        </div>
        <div className="d-none d-lg-flex gap-4 ">
          <Link to={"/auth/signin"}>
            {" "}
            <button className=" login-btn ">Log in</button>{" "}
          </Link>

          <Link to={"/auth/signup"}>
            {" "}
            <button className="sign-up-btn ">Sign up</button>
          </Link>
        </div>
        <div className="d-md-none">
          {["top"].map((placement, idx) => (
            <OffCanvass key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
