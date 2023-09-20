import React from "react";
import {
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-5 z-10 p-10 md:px-20 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container flex justify-between ">
        <span>
          <FaReact size={35} className=" text-secondary-600" /> React Guy by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            CodeUchay
          </span>
        </span>
        <div className="flex justify-between items-center gap-4 md:gap-36 my-6">
         
          <a 
            href="https://instagram.com"
            target="_blank">
          <FaInstagram
            size={35}
            className=" cursor-pointer text-purple-800  rounded"
            
          /></a>
           <a 
            href="https://twitter.com/offuchay"
            target="_blank">
          <FaTwitterSquare
            size={35}
            className=" cursor-pointer text-purple-800  rounded"
          /></a>
          <a 
            href="https://github.com/codeuchay"
            target="_blank">
          <FaGithubSquare
            size={35}
            className="text-purple-800 cursor-pointer  rounded"
          />
          </a>
        </div>
      </div>
      <p className="text-slate-500">All rights reserved.</p>
    </footer>
  );
};

export default Footer;
