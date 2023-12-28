import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container shadow-lg">
        <div className="flex justify-between items-center py-2">
          <div>
            <img src={Logo} className="w-20" alt="Fitness App" />
          </div>
          <div>
            <ul className="flex gap-8">
              <li>
                <Link to="/"  className="text-gray-700 hover:text-teal-400 hover:no-underline">
                  Home
                </Link>
              </li>
              <li>
                <a className="text-gray-700 hover:text-teal-400 hover:no-underline" href="#search-exercise">
                  Exercises
                </a>
              </li>
              <li >
                <Link to="/about"  className="text-gray-700 hover:text-teal-400 hover:no-underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
