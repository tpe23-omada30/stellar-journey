import Questions from './data/Questions';
import PlanetQuestion from './containers/PlanetQuestion';

import './App.css';

function App() {
	// Get the planet from the hash of the URL
	let planet = window.location.hash.slice(1);

	// Check if the planet is valid
	if (planet in Questions){
		return <PlanetQuestion planet={planet}></PlanetQuestion>;
	} else {
		return null;
	}

}

export default App;
