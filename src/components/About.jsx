import { motion } from "framer-motion";
import React, { useTransition, useState } from "react";
import about from "../images/about.png";
import { useSelector } from 'react-redux';



const About = () => {
      // Language Selector 
      const selectedLanguage = useSelector((state) => state.language);
      // Define translation content based on selectedLanguage
      const translations = {
       en: {
         title: 'About Uche',
         paragraph: 'Uche is a Software Engineer, who specializes in full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React.js, Typescript.js, Next.js, Redux, Node.js, Express.js, Mongo DB, Firebase, Tailwind CSS, Figma, Adobe, HTML, CSS, and Git. I am determined to teach others about these vast range of programming tools, and also looking to expand my knowledge and skill set. I am a friendly team player and I am excited to work with others to create amazing web/mobile applications.',
        
       },
       fr: {
         title: "À propos d'Uche",
         paragraph: "Uche est un ingénieur logiciel, qui se spécialise dans le développement web full stack avec une passion pour la création d'applications web interactives et réactives. J'ai de l'expérience avec JavaScript, React.js, Typescript.js, Next.js, Redux, Node.js, Express.js, Mongo DB, Firebase, Tailwind CSS, Figma, Adobe, HTML, CSS, et Git. Je suis déterminé à enseigner aux autres cette vaste gamme d'outils de programmation, et je cherche également à élargir mes connaissances et mon ensemble de compétences. Je suis un joueur d'équipe amical et je suis enthousiaste à l'idée de travailler avec d'autres pour créer des applications web/mobiles étonnantes.",
        
       },
     };
   
     const { title, paragraph } = translations[selectedLanguage];

     const list_data = [
      {
        title: `${selectedLanguage === 'en' ?  "Stack" : "Outils"}`,
        id: "stack",
        content: (
          <ul className="list-disc pl-2">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Typescript.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Mongo db</li>
            <li>Firebase</li>
            <li>Tailwind CSS/SCSS</li>
          </ul>
        ),
      },
      {
        title: `${selectedLanguage ==='en' ?  "Education" : "Éducation"}`,
        id: "education",
        content: (
          <ul className="list-disc pl-2">
            <li>Yaba College of Technology, Nigeria </li>
            <li>Esigelec, France</li>
          </ul>
        ),
      },
      {
        title: "Certifications",
        id: "certifications",
        content: (
          <ul className="list-disc pl-2">
            <li>AWS Cloud Practitioner</li>
          </ul>
        ),
      },
    ];
  const [tab, setTab] = useState("stack");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

  const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

    return (
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {children}
        </p>
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-primary-500 mt-2 mr-3"
        ></motion.div>
      </button>
    );
  };
  return (
    <section className="text-white max-w-[1240px] mx-auto" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  items-center  px-4 mx-10 md:gap-16 ">
        <div className=" md:my-20 md:py-10"> 
        <img src={about} width={500} height={500} className="animate-bounce-slow  "/></div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4"> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {title}
            </span></h2>
          <p className="text-base lg:text-lg">
            {paragraph}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("stack")}
              active={tab === "stack"}
            >
              Stack
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8" >
            {list_data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
