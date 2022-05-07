import React from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";

import hogs from "../porkers_data";
import { useState } from "react";

function App() {

	const [filterBy, setfilterBy] = useState("all")
	const [filterByName, setfilterByName] = useState('all')

	let hogToDisplay = hogs.filter((data) => {
		if(filterBy === "all"){
			return true
		} else {
			return data.greased === filterBy;
		}
	})

	let hogToDisplayName = hogToDisplay.filter(names => {
		if(filterByName === 'all'){
			return true
		} else{
			return names.name === filterByName;
		}
	}) 
	function handleFilter(event){
		setfilterBy(event.target.value === 'greased' ? true : false)
	}

	function handleFilterName(event){
		setfilterBy(filterByName => filterByName = event.target.value)
	}

	const hogLings = hogToDisplay.map( hog => (
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
			
			<select onClick={ handleFilter }>
				<option value='all'>Filter</option>
				<option value="greased"></option>
			</select>

			<select onClick={ handleFilterName }>
				
			</select>




			{hogLings}
		</div>
	);
}

export default App;
