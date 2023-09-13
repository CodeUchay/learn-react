import React from "react";
import Home
 from "./components/Home";
 import { Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Route path="/" element={<Home/> }/>
      </Router>
      </>
  );
}

export default App;
