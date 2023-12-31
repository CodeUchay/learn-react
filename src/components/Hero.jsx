import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import herolaptop from '../images/herolaptop.png';
import { useSelector } from 'react-redux';

const Hero = () => {

    // Language Selector 
    const selectedLanguage = useSelector((state) => state.language);
   // Define translation content based on selectedLanguage
   const translations = {
    en: {
      title: 'Do you want to Learn',
      paragraph: 'React guy offers amazing React Tutorial offers for English and French Students.',
      button1: 'Register',
      button2: 'Read More',
    },
    fr: {
      title: 'Voulez-vous apprendre',
      paragraph: 'React guy propose des offres incroyables de tutoriels React pour les étudiants anglais et français.',
      button1: 'Registre',
      button2: 'Lire plus',
    },
  };

  const { title, paragraph, button1, button2 } = translations[selectedLanguage];

  return (
    <section className="lg:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {title}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "ReactJs",
                1000,
                "TypescriptJs",
                1000,
                "Cloud Architecture",
                1000,
                "UI/UX Design",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-red-500"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           {paragraph}
          </p>
          <div>
            <a
              href="/plans"
              className="px-6 inline-block py-3 rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              {button1}
            </a>
            <a
              href="#section3"
              className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500  text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-purple-700 hover:shadow-xl rounded-full px-5 py-2">
                {button2}
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full hover:scale-110 duration-300 bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={herolaptop}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse-slow"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;