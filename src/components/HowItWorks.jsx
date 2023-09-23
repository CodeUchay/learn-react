import React from "react";
import { FaTools } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { useSelector } from 'react-redux';

function HowItWorks() {
    // Language Selector 
 const selectedLanguage = useSelector((state) => state.language);
 // Define translation content based on selectedLanguage
 const translations = {
  en: {
    title: 'How to be my Student',
    item1: {heading: 'Requirements', list1: "A Laptop", list2: "Beginner level in English", list3: "Optional - Basic Knowledge of HTML, CSS and Javascript"},
    item2: {heading: 'Appointments', list1: "Pick a suitable suscription plan time", list2: "Fill contact form.", list3: "You'll get an email to pick your convinient schedule date"},
  },
  fr: {
    title: 'Comment être mon élève',
    item1: {heading: 'Exigences', list1: "Un ordinateur portable", list2: "Niveau débutant en anglais", list3: "Facultatif - Connaissances de base en HTML, CSS et Javascript"},
    item2: {heading: 'Rendez-vous', list1: "Choisir un plan d'abonnement approprié", list2: "Remplir le formulaire de contact.", list3: "Vous recevrez un courriel vous invitant à choisir la date qui vous convient le mieux."},
  },
};
const { title, item1, item2,  } = translations[selectedLanguage];
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3">
      <span className="text-transparent text-center inline-flex text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        {title} <CiSettings size={45} className="text-pink-500 " />
      </span>
      <div className="flex flex-row gap-3 justify-center  ">
        <div>
          <span className="text-gray-300 inline-flex">
           {item1.heading} <FaTools size={20} className="ml-2 mt-1" />
          </span>
          <br />
          <div className="border-t border-l text-gray-300 pl-5 m-3 border-purple-900">
            <ul className="text-xs  md:text-sm list-disc mt-2 pl-2 ">
              <li>{item1.list1}</li>
              <li>{item1.list2}</li>
              <li>{item1.list3}</li>
            </ul>
          </div>
        </div>
        <div>
          <span className="text-gray-300 inline-flex">
          {item2.heading}  <GiRotaryPhone size={25} className="ml-2" />
          </span>
          <br />
          <div className="border-t border-l text-gray-300 pl-5  m-3 border-purple-900">
            <ul className="text-xs md:text-sm list-disc mt-2 pl-2">
            <li>{item2.list1}</li>
              <li>{item2.list2}</li>
              <li>{item2.list3}</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HowItWorks;
