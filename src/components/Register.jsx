import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ywmicl",
        "template_xmw5wsp",
        form.current,
        "YRw60-OBd6Uzz2v8R"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          setName("");
          setEmail("");
          setPhone("");
          setPlan("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [showModal, setShowModal] = useState(false);

  const Modal = () => {
    return (
      <div className="fixed inset-0 flex justify-center items-center mx-5 bg-gray-800 bg-opacity-75">
        <div className="bg-[#121212] p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">
           Messege set successfully
          </p>
          <p className="text-lg text-gray-300">
           You will get a response from us as soon as possible. Thank You!
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="mt-4 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-700"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  return (
    <div >
      <div className="flex justify-center items-center">
        <span className="text-transparent items-center text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          Registration
        </span>
      </div>
      <div className="p-10 grid md:grid-cols-2    gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-20 w-20 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="">
          <h5 className="text-xl font-bold text-white my-2">
            Complete this form to{" "}
            <span className="text-primary-500 font-semibold">Register</span> or{" "}
            <span className="text-secondary-500 font-semibold">Contact Me</span>
          </h5>
          <p className="text-gray-400 mb-4 max-w-md">
            {" "}
            I&apos;m always eager to mentor new students, my inbox is always
            open. If you have a question or want to start right away, I&apos;ll
            get back to you immediatley!
          </p>
          <div className="socials flex flex-row gap-2"></div>
        </div>
        <div className="">
          <form ref={form} onSubmit={sendMessage} className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={email}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jonsnow@gmail.com"
                onChange={(e) => setEmail (e.target.value)
                }
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="text"
                name="user_name"
                value={name}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Jon Snow"
                onChange={(e) => setName (e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-white block mb-2 text-sm font-medium"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="user_phone"
                value={phone}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="+1234567890"
                onChange={(e) => setPhone (e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Plan
              </label>
              <div className="text-gray-300">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="plan"
                    value="basic"
                    onChange={handlePlanChange}
                    checked={plan === "basic"}
                    className="mr-2"
                  />
                  Basic
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="plan"
                    value="platinum"
                    onChange={handlePlanChange}
                    checked={plan === "platinum"}
                    className="mr-2"
                  />
                  Platinum
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                    type="radio"
                    name="plan"
                    value="gold"
                    onChange={handlePlanChange}
                    checked={plan === "gold"}
                    className="mr-2"
                  />
                  Gold
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Notes
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="I would like to..."
                onChange={(e) => setMessage (e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default Register;
