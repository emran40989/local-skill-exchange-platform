import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/mylogo.png"



const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-sm font-semibold">Home</NavLink>
      </li>
      <li>
        <NavLink to="/skills" className="text-sm font-semibold">Skills</NavLink>
      </li>
      <li>
        <NavLink to="/signup" className="text-sm font-semibold">Signup</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto py-2 shadow-sm my-2 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex gap-5 justify-center items-center"><img src={logo} alt="Logo" className="w-[30px]" />
        <p className="text-lg font-semibold">Skill Exchange Platform</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary"> <Link to="/login" className="text-sm font-semibold">Login</Link></button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
