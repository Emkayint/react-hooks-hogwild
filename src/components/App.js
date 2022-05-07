import React from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";

import hogs from "../porkers_data";

function App() {
	const hogLings = hogs.map( hog => (
		<Hogs 
			name = {hog.name}
			image = {hog.image}
			greased = {hog.greased}
			weight = {hog.weight}
			specialty = {hog.specialty}
			medal = {hog["highest medal achieved"]}
		/>
	))

	return (
		<div className="App">
			<Nav />
			{hogLings}
		</div>
	);
}

export default App;
