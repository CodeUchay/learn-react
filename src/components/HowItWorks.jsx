import React from "react";
import { FaTools } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

function HowItWorks() {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3">
      <span className="text-transparent text-center inline-flex text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        How to be my Student <CiSettings size={45} className="text-pink-500 " />
      </span>
      <div className="flex flex-row gap-3 justify-center  ">
        <div>
          <span className="text-gray-300 inline-flex">
           Requirements <FaTools size={20} className="ml-2 mt-1" />
          </span>
          <br />
          <div className="border-t border-l text-gray-300 pl-5 m-3 border-purple-900">
            <ul className="text-xs  md:text-sm list-disc mt-2 pl-2 ">
              <li>A Laptop</li>
              <li>Beginner level in English</li>
              <li>Optional - Basic Knowledge of HTML, CSS and Javascript</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-gray-300 inline-flex">
           Appointments  <GiRotaryPhone size={25} className="ml-2" />
          </span>
          <br />
          <div className="border-t border-l text-gray-300 pl-5  m-3 border-purple-900">
            <ul className="text-xs md:text-sm list-disc mt-2 pl-2">
              <li>Pick a Plan suitable to your time</li>
              <li>Fill contact form.</li>
              <li>You'll get an email to pick your convinient schedule date</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HowItWorks;
