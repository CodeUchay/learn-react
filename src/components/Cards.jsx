import React from "react";
import basic from "../images/basic.png";
import premium from "../images/premium.png";
import gold from "../images/gold.png";
import { useSelector } from "react-redux";

const Cards = () => {
  // Language Selector
  const selectedLanguage = useSelector((state) => state.language);
  // Define translation content based on selectedLanguage
  const translations = {
    en: {
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

      card1: {
        list1: "Understanding react",
        list2: "React Front-end Basics",
        list3: "One final Portfolio Project",
      },
      card2: {
        list1: "Advanced React Tools",
        list2: "3 final projects",
        list3: "Deployment and hosting",
      },
      card3: {
        list1: "Fullstack Development",
        list2: "React.js, Node.js and Typescript.js",
        list3: "One Final Fullstack Project",
      },

      button: "Register",
    },
    fr: {
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

      card1: {
        list1: "Comprendre l'outil react",
        list2: "Principes de React Front-end",
        list3: "Un projet de portefeuille final",
      },
      card2: {
        list1: "Outils avancés pour React",
        list2: "3 projets finaux",
        list3: "Déploiement et hébergement",
      },
      card3: {
        list1: "Développement Fullstack",
        list2: "React.js, Node.js et Typescript.js",
        list3: "Un projet de type Fullstack",
      },

      button: "Registre",
    },
  };

  const { type, rate, card1, card2, card3, button } =
    translations[selectedLanguage];
  return (
    <div className=" w-full py-8 px-10 my-5  bg-[#121212] text-gray-300">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <a href="#section6">
          <div className="border border-primary-700 hover:bg-primary-900 w-full shadow-xl hover:shadow-primary-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-40 mx-auto mt-[-6rem] hover:animate-bounce"
              src={basic}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3 text-white">
              {type.type1}
            </h2>
            <p className="text-center text-4xl font-bold text-white">
              {rate.rate1}
              <span className="text-sm text-gray-500">/hr</span>
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-3">{card1.list1}</p>
              <p className="py-2 border-b mx-8">{card1.list2}</p>
              <p className="py-2 border-b mx-8">{card1.list3}</p>
            </div>
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              {button}
            </button>
          </div>
        </a>
        <a href="#section6">
          <div className=" w-full shadow-xl bg-[#ff12ac3a] hover:shadow-pink-900 flex flex-col p-4 md:my-4 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className=" w-40 mx-auto mt-[-6rem] bg-transparent hover:animate-bounce"
              src={premium}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3 text-white">
              {type.type2}
            </h2>
            <p className="text-center text-4xl font-bold text-white">
              {rate.rate2}
              <span className="text-sm text-gray-500">/hr</span>
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-3">{card2.list1}</p>
              <p className="py-2 border-b mx-8">{card2.list2}</p>
              <p className="py-2 border-b mx-8">{card2.list3}</p>
            </div>
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              {button}
            </button>
          </div>
        </a>
        <a href="#section6">
          <div className="border border-pink-800 hover:bg-pink-800 w-full shadow-xl hover:shadow-[#ff12ac3a] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-40 mx-auto mt-[-6rem] hover:animate-bounce"
              src={gold}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3 text-white">
              {type.type3}
            </h2>
            <p className="text-center text-4xl font-bold text-white">
              {rate.rate3}
              <span className="text-sm text-gray-500">/hr</span>
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-3">{card3.list1}</p>
              <p className="py-2 border-b mx-8">{card3.list2}</p>
              <p className="py-2 border-b mx-8">{card3.list3}</p>
            </div>
            <button className="bg-gradient-to-br text-white from-primary-500 to-secondary-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              {button}
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
