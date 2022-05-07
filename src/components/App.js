import React from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import NamesFilter from "./NamesFilter";
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
		setfilterBy(filterBy => {
			if(event.target.value === "all"){
				return filterBy = 'all'
			} else if(event.target.value === 'greased'){
				return filterBy = true
			} else {
				return filterBy = false
			}
		})
	}

	function handleFilterName(event){
		setfilterByName(filterByName => filterByName = event.target.value)
	}

	const hogLings = hogToDisplayName.map( hog => (
		<Hogs 
			name = {hog.name}
			image = {hog.image}
			greased = {hog.greased}
			weight = {hog.weight}
			specialty = {hog.specialty}
			medal = {hog["highest medal achieved"]}
		/>
	))

	const hogName = hogs.map(hog => (
		<NamesFilter name = {hog.name} />
	))

	return (
		<div className="App">
			<Nav />
			
			<select onClick={ handleFilter }>
				<option value='all'>All greased </option>
				<option value="greased">Greased</option>
				<option value = "nn">Not Greased</option>

			</select>

			<select onClick={ handleFilterName }>
				<option value= "all">By Name</option>
				{hogName}
			</select>




			{hogLings}
		</div>
	);
}

export default App;
