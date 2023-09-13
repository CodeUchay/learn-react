import React from "react";
import { FaTools } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

function HowItWorks() {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3">
      <span className="text-transparent text-center inline-flex text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        How to be my Student <CiSettings size={35} className="text-pink-500 " />
      </span>
      <div className="flex justify-center items-center md:flex-row">
        <div>
          <span className="text-gray-300 inline-flex">
           Requirements <FaTools size={25} className="ml-2" />
          </span>
          <br />
          <div className="border-t border-l text-gray-300 p-5 m-3 border-purple-900">
            <ul className="  text-sm list-disc pl-2 ">
              <li>React's virtual DOM and efficient rendering make web applications
              fast and responsive.</li>
              <li>React's virtual DOM and efficient rendering make web applications
              fast and responsive.</li>
              <li>React's virtual DOM and efficient rendering make web applications
              fast and responsive.</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-gray-300 inline-flex">
           Appointments  <GiRotaryPhone size={25} className="ml-2" />
          </span>
          <br />
          <div className="border-t border-l text-gray-300 p-5 m-3 border-purple-900">
            <ul className="  text-sm list-disc pl-2">
              <li>React's virtual DOM and efficient rendering make web applications
              fast and responsive.</li>
              <li>React's virtual DOM and efficient rendering make web applications
              fast and responsive.</li>
              <li>React's virtual DOM and efficient rendering make web applications
              fast and responsive.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HowItWorks;
