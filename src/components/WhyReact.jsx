import React from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FaReact } from "react-icons/fa";
import { GiRunningNinja } from "react-icons/gi";
import { AiFillBuild } from "react-icons/ai";
import { useSelector } from 'react-redux';

const data = [
  { name: "ReactJs", value: 80 },
  { name: "AngularJs", value: 10 },
  { name: "VueJs", value: 10 },
];

const COLORS = ["#9c1bb3", "#FFBB28", "#FF8042"];


const WhyReact = () => {
   // Language Selector 
 const selectedLanguage = useSelector((state) => state.language);
 // Define translation content based on selectedLanguage
 const translations = {
  en: {
    title: 'Why use React?',
    header: 'React is a popular JavaScript library for building user interfaces. Here are some reasons to use React:',
    item1: {heading: 'Fast Performance', paragraph: "React's virtual DOM and efficient rendering make web applications fast and responsive."},
    item2: {heading: 'Component-Based', paragraph: "React's component-based architecture promotes reusability and maintainability of code."},
    item3: 'React Usage Comparison',
  },
  fr: {
    title: 'Pourquoi utiliser React? ',
    header: "React est une bibliothèque JavaScript populaire pour la construction d'interfaces utilisateur. Voici quelques raisons d'utiliser React:",
    item1: {heading: 'Performances rapides', paragraph: "Le DOM virtuel et le rendu efficace de React rendent les applications web rapides et réactives."},
    item2: {heading: 'Basé sur les composants', paragraph: "L'architecture à base de composants de React favorise la réutilisation et la maintenabilité du code."},
    item3: "Comparaison de l'utilisation de React",
  },
};

const { title, header, item1, item2, item3 } = translations[selectedLanguage];
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3">
      <span className="text-transparent text-center text-ellipsis inline-flex text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        {title}<FaReact size={35} className="block text-pink-500"/>
      </span>

      <span className="text-gray-200">
        {header}
      </span>
      <div className="flex flex-col md:flex-row  gap-3 md:gap-12">
        <div className="rounded p-5 max-w-sm md:max-w-xl">
          <span className="text-gray-300 inline-flex">{item1.heading} <GiRunningNinja size={25} className="ml-2"/></span>
          <br />
          <div className="border-t border-l p-5 m-3 border-purple-900">
          <span className=" text-gray-400">
          {item1.paragraph}
          </span>
          </div>
        </div>
        <div className="rounded p-5 max-w-sm md:max-w-xl">
          <span className="text-gray-300 inline-flex">{item2.heading} <AiFillBuild size={25} className="ml-2"/></span>
          <br />
          <div className="border-t border-l p-5 m-3 border-purple-900">
          <span className=" text-gray-400">
          {item2.paragraph}
          </span>
          </div>
         
        </div>
      </div>
      <span className="text-gray-300 text-2xl">
     {item3}
      </span>
      <ResponsiveContainer className="border-t border-l p-5 m-3 border-purple-900 " width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WhyReact;
