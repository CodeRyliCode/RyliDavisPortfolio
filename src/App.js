import React from "react";
import { Route, Routes } from "react-router-dom"

//Components
import Homepage from "./components/Homepage"

// Pages
import Projects from "./pages/Projects";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";


const App = () => {
  return (
		<Routes>
			<Route path="/" element={<Homepage />} />{" "}
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact-me" element={<Contacts />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
