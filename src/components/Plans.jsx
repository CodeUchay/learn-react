import React, { useEffect } from "react";
import { LiaBookSolid } from "react-icons/lia";
import { AiFillHome } from "react-icons/ai";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Plans() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Language Selector
  const selectedLanguage = useSelector((state) => state.language);
  // Define translation content based on selectedLanguage
  const translations = {
    en: {
      title: "Study Plans",
      type: {
        type1: "Basic",
        type2: "Premium",
        type3: "Gold",
      },
      rate: {
        rate1: "€9.99",
        rate2: "€14.99",
        rate3: "€29.99",
      },
      button: "Register",
      list1: { 
        item1: "10 tutorial sessions", 
        item2: "You'll learn React and CSS/Tailwind CSS depending on level of knowledge in knowledge in Webdevelopment before registration", 
        item3: "You are required fill a questionaire before starting", 
        item4: "You are required to open a github account before tutorial starts", 
        item5: "You will be given assignments to tender at your next session", 
        item6: "You'll have a portfolio ready at the end of the session for you to be able to make more projects or find a job", 
        item7: "Extra sessions or support for same project go at the same rate", },
        
      list2: 
        { 
        item1: "10 tutorial sessions", 
        item2: "You are required to have a Basic knowledge of HTML, CSS and Javascript",
        item3: "You'll learn React extensively including react hooks, state managemement etc and CSS/Tailwind CSS depending on level of knowledge in knowledge in Web development before registration", 
        item4: "You'll have 3 react applications at the end of the tutorial including a more functional portfolio ready at the end of the session for you to be able to make more projects or find a job as a Junior Developer", 
        item5: "You are required fill a questionaire before starting", 
        item6: "You are required to open a github account before tutorial starts", 
        item7: "You will be given assignments to tender at your next session", 
        item8: "Extra sessions or support for same project go at the same rate",
      },
        
      list3: 
        {
        item1: "10 tutorial sessions", 
        item2: "You are required to have a Advanced knowledge of HTML, CSS and Javascript",
        item3: "You'll learn React extensively including react hooks, state managemement etc and CSS/Tailwind CSS depending on level of knowledge in knowledge in Web development before registration", 
        item4: "You'll learn how to design an application from start to finsh. The design will be made using color theory and typography principles", 
        item5: "You'll have One react Ecommerce or Blog web application at the end of the tutorial ready at the end of the session", 
        item6: "You'll be taught to use Node.js and Express.js or a Google Firebase for backend depending on your wish", 
        item7: "You are required fill a questionaire before starting. This will let us know if you're ready to use Typescript or not", 
        item8: "You are required to open a github account before tutorial starts",
        item9: "You will be given assignments to tender at your next session",
        item10: "You'll be taught how to deploy your application using vercel",
        item11: "Extra sessions or support for same project go at the same rate",},
    },
    fr: {
      title: "Plans d'études",
      type: {
        type1: "Régulière",
        type2: "Prime",
        type3: "Or",
      },
      rate: {
        rate1: "€9.99",
        rate2: "€14.99",
        rate3: "€29.99",
      },
      button: "Registre",
      list1: 
      { 
      item1 : "10 sessions de tutoriels", 
      item2 : "Vous apprendrez React et CSS/Tailwind CSS en fonction du niveau de connaissance en développement web avant l'inscription", 
      item3 : "Vous devez remplir un questionnaire avant de commencer", 
      item4 : "Vous devez ouvrir un compte github avant le début du tutoriel", 
      item5 : "Vous recevrez des devoirs à remettre lors de votre prochaine session", 
      item6 : "Vous aurez un portfolio prêt à la fin de la session qui vous permettra de réaliser d'autres projets ou de trouver un emploi", 
      item7 : "Les sessions supplémentaires ou l'accompagnement d'un même projet se font au même tarif", },


      list2: 
      { 
        item1 : "10 sessions de tutorat", 
        item2 : "Vous devez avoir des connaissances de base en HTML, CSS et Javascript",
        item3 : "Vous apprendrez React de manière approfondie, y compris les hooks react, la gestion de l'état, etc. et CSS/Tailwind CSS en fonction du niveau de connaissance en développement Web avant l'inscription", 
        item4 : "Vous aurez 3 applications React à la fin du tutoriel y compris un portfolio plus fonctionnel prêt à la fin de la session pour que vous puissiez faire plus de projets ou trouver un emploi en tant que développeur junior", 
        item5 : "Vous devez remplir un questionnaire avant de commencer", 
        item6 : "Vous devez ouvrir un compte github avant le début du tutorat", 
        item7 : "Vous recevrez des missions à remettre lors de votre prochaine session", 
        item8 : "Les sessions supplémentaires ou le soutien pour le même projet sont facturés au même tarif",
      },

      list3: {
        item1 : "10 sessions de tutorat", 
        item2 : "Vous devez avoir une connaissance avancée de HTML, CSS et Javascript",
        item3 : "Vous apprendrez React de manière approfondie, y compris les hooks react, la gestion de l'état, etc. et CSS/Tailwind CSS en fonction du niveau de connaissance en développement Web avant l'inscription", 
        item4 : "Vous apprendrez à concevoir une application du début à la fin. Le design sera réalisé en utilisant la théorie des couleurs et les principes de la typographie", 
        item5 : "Vous aurez une application web Ecommerce ou Blog réactive à la fin du tutoriel, prête à la fin de la session", 
        item6 : "Vous apprendrez à utiliser Node.js et Express.js ou un Google Firebase pour le backend selon votre souhait", 
        item7 : "Vous devez remplir un questionnaire avant de commencer. Cela nous permettra de savoir si vous êtes prêt à utiliser Typescript ou non", 
        item8 : "Vous devez ouvrir un compte github avant le début du tutoriel",
        item9 : "Vous recevrez des devoirs à remettre lors de votre prochaine session",
        item10 : "On vous apprendra à déployer votre application en utilisant vercel",
        item11 : "Les sessions supplémentaires ou l'assistance pour le même projet sont au même tarif",},
    },
  };

  const { title, type, rate, button, list1, list2, list3 } =
    translations[selectedLanguage];

  return (
    <div className="w-full mx-auto bg-[#121212] ">
      <div className="container w-full  py-8 px-10  bg-[#121212] text-gray-300">
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
          {title}
          <LiaBookSolid size={35} className="mt-1 text-pink-500" />
        </span>

        <div className="max-w-[1240px] mx-auto flex flex-col gap-8 mt-5">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className=" bg-primary-900 max-w-sm shadow-md hover:shadow-primary-500 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              {/* <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" /> */}
              <h2 className="text-2xl font-bold text-center py-3 text-white">
                {type.type1}
              </h2>
              <p className="text-center text-4xl font-bold text-white">
                €9.99<span className="text-sm text-gray-500">/hr</span>
              </p>

              <button className="bg-gradient-to-br cursor-default from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              {type.type1}
              </button>
            </div>
            <div className="rounded max-w-sm md:max-w-xl">
              <ul className="list-disc border-b border-r p-5 mx-5 border-purple-900">
                <li className=" text-gray-400">
                 {list1.item1}
                </li>
                <li className=" text-gray-400">
                {list1.item2}
                </li>
                <li className=" text-gray-400">
                {list1.item3}
                </li>
                <li className=" text-gray-400">
                {list1.item4}
                </li>
                <li className=" text-gray-400">
                {list1.item5}
                </li>
                <li className=" text-gray-400">
                {list1.item6}
                </li>
                <li className=" text-gray-400">
                {list1.item7}
                </li>
              </ul>
            </div>
          </div>
          {/* bg-[#ffa8e03a] */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="bg-[#ff12ac3a] max-w-sm shadow-xl hover:shadow-secondary-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              {/* <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" /> */}
              <h2 className="text-2xl font-bold text-center py-3 text-white">
                {type.type2}
              </h2>
              <p className="text-center text-4xl font-bold text-white">
                €14.99<span className="text-sm text-gray-500">/hr</span>
              </p>

              <button className="bg-gradient-to-br cursor-default from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              {type.type2}
              </button>
            </div>
            <div className="rounded max-w-sm md:max-w-xl">
              <ul className="list-disc border-b border-r p-5 mx-5 border-purple-900">
              <li className=" text-gray-400">
                 {list2.item1}
                </li>
                <li className=" text-gray-400">
                {list2.item2}
                </li>
                <li className=" text-gray-400">
                {list2.item3}
                </li>
                <li className=" text-gray-400">
                {list2.item4}
                </li>
                <li className=" text-gray-400">
                {list2.item5}
                </li>
                <li className=" text-gray-400">
                {list2.item6}
                </li>
                <li className=" text-gray-400">
                {list2.item7}
                </li>
                <li className=" text-gray-400">
                {list2.item8}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="bg-pink-800 max-w-sm shadow-xl hover:shadow-secondary-700 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              {/* <img className='w-40 mx-auto mt-[-6rem] hover:animate-bounce' src={basic} alt="/" /> */}
              <h2 className="text-2xl font-bold text-center py-3 text-white">
                {type.type3}
              </h2>
              <p className="text-center text-4xl font-bold text-white">
                €29.99<span className="text-sm text-gray-500">/hr</span>
              </p>

              <button className="bg-gradient-to-br cursor-default from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              {type.type3}
              </button>
            </div>
            <div className="rounded max-w-sm md:max-w-xl">
              <ul className="list-disc border-b border-r p-5 mx-5 border-purple-900">
              <li className=" text-gray-400">
                 {list3.item1}
                </li>
                <li className=" text-gray-400">
                {list3.item2}
                </li>
                <li className=" text-gray-400">
                {list3.item3}
                </li>
                <li className=" text-gray-400">
                {list3.item4}
                </li>
                <li className=" text-gray-400">
                {list3.item5}
                </li>
                <li className=" text-gray-400">
                {list3.item6}
                </li>
                <li className=" text-gray-400">
                {list3.item7}
                </li>
                <li className=" text-gray-400">
                {list3.item8}
                </li>
                <li className=" text-gray-400">
                {list3.item9}
                </li>
                <li className=" text-gray-400">
                {list3.item10}
                </li>
                <li className=" text-gray-400">
                {list3.item11}
                </li>
              </ul>
            </div>
          </div>
          <Register />
        </div>
      </div>
    </div>
  );
}

export default Plans;
