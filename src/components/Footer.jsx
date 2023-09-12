import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5 border z-10 p-10 md:px-20 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between ">
        <span>
          <FaReact size={35} className=" text-secondary-600" /> Learn React by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            CodeUchay
          </span>{" "}
        </span>
        <div className="flex justify-between items-center gap-4 md:gap-16 my-6">
          <FaFacebookSquare
            size={30}
            className="text-purple-800 cursor-pointer bg-gradient-to-r from-primary-400 to-secondary-600 rounded"
          />
          <FaInstagram
            size={30}
            className=" cursor-pointer text-purple-800 bg-gradient-to-r from-primary-400 to-secondary-600 rounded"
          />
          <FaTwitterSquare
            size={30}
            className=" cursor-pointer text-purple-800 bg-gradient-to-r from-primary-400 to-secondary-600 rounded"
          />
          <FaGithubSquare
            size={30}
            className="text-purple-800 cursor-pointer bg-gradient-to-r from-primary-400 to-secondary-600 rounded"
          />
          <FaDribbbleSquare
            size={30}
            className="text-purple-800 cursor-pointer bg-gradient-to-r from-primary-400 to-secondary-600 rounded"
          />
        </div>
      </div>
      <p className="text-slate-500">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
