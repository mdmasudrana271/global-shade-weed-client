import React from "react";
import { Link } from "react-router-dom";
import navlog from "../../assets/img/navlogo.png";

const Header = () => {
  return (
    <section>
      <div className="navbar bg-gradient px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>
                  Item1
                </a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl"></a> */}
          <img className="w-24 h-14" src={navlog} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Find Reservation</a>
              <a>About Us</a>
              <a>Gol</a>
              <a>Support</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <Link className="text-primaryColor">Login</Link>
          <Link className="btn border-none px-5 bg-primaryColor rounded-full text-white">Sign Up</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
