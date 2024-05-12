import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className="flex justify-between  items-center mb-8 border border-inherit rounded-full p-2 px-4 md:px-8 md:w-full w-lvw  ">
        <img className="w-auto h-20" src={logo} alt="" />

        <div className=" flex gap-6">
          <button className="bg-white hover:bg-gray-200 border border-inherit border-black  text-black px-8 py-4 rounded-full">
            Get Projects
          </button>
          <button className="button text-white px-8 py-4 rounded-full">
               <Link to="/form"> Onboard Now </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
