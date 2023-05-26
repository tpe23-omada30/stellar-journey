import { useEffect, useState } from 'react';

import Questions from './data/Questions';
import PlanetQuestion from './containers/PlanetQuestion';

import './App.css';

function App() {

	// Get the planet from the hash of the URL
	let [planet, setPlanet] = useState(window.location.hash.slice(1));

	// Automatically update the planet when the URL changes
	useEffect(() => {
		function updatePlanet(){
			setPlanet(window.location.hash.slice(1));
		}
		window.addEventListener("hashchange", updatePlanet);
		return () => window.removeEventListener("hashchange", updatePlanet);
	})

	// Check if the planet is valid
	if (planet in Questions){
		return <PlanetQuestion planet={planet}></PlanetQuestion>;
	} else {
		return null;
	}

}

export default App;
