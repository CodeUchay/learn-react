import React from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { FaReact } from "react-icons/fa";

const data = [
  { name: "React", value: 80 },
  { name: "Angular", value: 10 },
  { name: "Vue", value: 10 },
];

const COLORS = ["#9c1bb3", "#FFBB28", "#FF8042"];

const WhyReact = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3">
      <span className="text-transparent text-center inline-flex text-4xl font-bold bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        Why use React? <FaReact size={35} className="text-pink-500 "/>
      </span>

      <span className="text-gray-200">
        React is a popular JavaScript library for building user interfaces. Here
        are some reasons to use React:
      </span>
      <div className="flex flex-col md:flex-row  gap-3 md:gap-12">
        <div className="border-2 rounded p-5 border-purple-500 max-w-sm md:max-w-xl">
          <span className="text-gray-300">Fast Performance</span>
          <br />
          <span className="text-gray-400">
            React's virtual DOM and efficient rendering make web applications
            fast and responsive.
          </span>
        </div>
        <div className="border-2 rounded p-5 border-purple-500 max-w-sm md:max-w-xl">
          <span className="text-gray-300">Component-Based</span>
          <br />
          <span className="text-gray-400">
            React's component-based architecture promotes reusability and
            maintainability of code.
          </span>
        </div>
      </div>
      <span className="text-gray-300 text-2xl font-bold">
        React Usage Comparison
      </span>
      <ResponsiveContainer width="100%" height={280}>
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
