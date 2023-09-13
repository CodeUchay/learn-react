import React from "react";
import Home
 from "./components/Home";
 import Plans from "./components/Plans";
 import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/plans" element={<Plans/> }/>
      </Routes>
      </>
  );
}

export default App;
