import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from 'react-redux';

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

     // Language Selector 
     const selectedLanguage = useSelector((state) => state.language);
     // Define translation content based on selectedLanguage
     const translations = {
      en: {
        title: 'Registeration',
        header: (<>Complete this form to
          <span className="text-primary-500 font-semibold"> Register</span> or
          <span className="text-secondary-500 font-semibold"> Contact Me</span></>),
        paragraph: "I'm always eager to mentor new students, my inbox is always open. If you have a question or want to start right away, I'll get back to you immediatley!",
        emailLabel: 'Your Email',
        nameLabel: 'Name',
        phoneLabel: 'Phone',
        planLabel: 'Plan',
        planLabels: {plan1: 'Basic', plan2: 'Premium', plan3: 'Gold'},
        notesLabel: 'Notes',
        notesPlaceHolder: 'I would like to...',
        button: 'Send Message'
      },
      fr: {
        title: 'Enregistrement',
        header: (<>Complétez ce formulaire pour
          <span className="text-primary-500 font-semibold"> Vous Inscrire</span>  ou
          <span className="text-secondary-500 font-semibold"> Me Contacter</span></>),
        paragraph: "Je suis toujours désireuse d'encadrer de nouveaux étudiants, ma boîte de réception est toujours ouverte. Si vous avez une question ou si vous voulez commencer tout de suite, je vous répondrai immédiatement!",
        emailLabel: 'Votre Email',
        nameLabel: 'Votre Nom',
        phoneLabel: 'Téléphone',
        planLabel: 'Plan',
        planLabels: {plan1: 'Régulière', plan2: 'Prime', plan3: 'Or'},
        notesLabel: 'Remarque',
        notesPlaceHolder: 'Je voudrais...',
        button: 'Envoyer le message'
      },
    };
  
    const { title, header, paragraph, emailLabel, nameLabel, phoneLabel, planLabel, planLabels, notesLabel, notesPlaceHolder, button } = translations[selectedLanguage];
  
  return (
    <div >
      <div className="flex justify-center items-center">
        <span className="text-transparent items-center text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
          {title}
        </span>
      </div>
      <div className="p-10 grid md:grid-cols-2    gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-20 w-20 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="">
          <h5 className="text-xl font-bold text-white my-2">
            {header}
          </h5>
          <p className="text-gray-400 mb-4 max-w-md">
            {paragraph}
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
                {emailLabel}
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
                {nameLabel}
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
                {phoneLabel}
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
                {planLabel}
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
                  {planLabels.plan1}
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
                  {planLabels.plan2}
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
                  {planLabels.plan3}
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                {notesLabel}
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={notesPlaceHolder}
                onChange={(e) => setMessage (e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
             {button}
            </button>
          </form>
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default Register;
