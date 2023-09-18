import React, { useEffect } from "react";
import { LiaBookSolid } from "react-icons/lia";
import { AiFillHome } from "react-icons/ai";
import Register from "./Register";
import { Link } from "react-router-dom";

function Plans() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container w-full py-8 px-10  bg-[#121212] text-gray-300">
      <Link
        to="/"
        className="text-primary-600 cursor-pointer text-2xl underline mb-4 py-1 flex items-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-3 mt-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <AiFillHome size={30} />
      </Link>
      <span className="text-transparent text-center inline-flex text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        Study Plans <LiaBookSolid size={35} className="mt-1 text-pink-500" />
      </span>

      <div className="max-w-[1240px] mx-auto flex flex-col gap-8 mt-5">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className=" bg-primary-900 max-w-sm shadow-md hover:shadow-primary-500 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            {/* <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" /> */}
            <h2 className="text-2xl font-bold text-center py-3 text-white">
              Basic
            </h2>
            <p className="text-center text-4xl font-bold text-white">€9.99</p>
            
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Register
            </button>
          </div>
          <div className="rounded max-w-sm md:max-w-xl">
            
            <ul className="list-disc border-b border-r p-5 mx-5 border-purple-900">
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
            </ul>
          </div>
        </div>
        {/* bg-[#ffa8e03a] */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-[#ff12ac3a] max-w-sm shadow-xl hover:shadow-secondary-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            {/* <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" /> */}
            <h2 className="text-2xl font-bold text-center py-3 text-white">
              Premium
            </h2>
            <p className="text-center text-4xl font-bold text-white">€14.99</p>
            
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Register
            </button>
          </div>
          <div className="rounded max-w-sm md:max-w-xl">
            
            <ul className="list-disc border-b border-r p-5 mx-5 border-purple-900">
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="bg-pink-800 max-w-sm shadow-xl hover:shadow-secondary-700 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            {/* <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" /> */}
            <h2 className="text-2xl font-bold text-center py-3 text-white">
              Gold
            </h2>
            <p className="text-center text-4xl font-bold text-white">€29.99</p>
            
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Register
            </button>
          </div>
          <div className="rounded max-w-sm md:max-w-xl">
            
            <ul className="list-disc border-b border-r p-5 mx-5 border-purple-900">
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
              <li className=" text-gray-400">
                React's virtual DOM and efficient rendering make web
                applications fast and responsive.
              </li>
            </ul>
          </div>
        </div>
        <Register/>
      </div>
      
    </div>
  );
}

export default Plans;
