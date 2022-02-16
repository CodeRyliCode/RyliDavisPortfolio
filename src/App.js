import React from "react";
import { Route, Routes } from "react-router-dom"

//Components
import Homepage from "./components/Homepage"

// Pages
import Projects from "./pages/Projects";


const App = () => {
  return (
      <Routes>
     <Route path="/" element={<Homepage />}></Route>
  <Route path="/projects" element={<Projects />}></Route>
  </Routes>

  )
}

export default App;
