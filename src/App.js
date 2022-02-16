import React from "react";
import { Route, Routes } from "react-router-dom"

//Components
import Homepage from "./components/Homepage"
import Error from "./pages/Error";

// Pages
import Projects from "./pages/Projects";


const App = () => {
  return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
