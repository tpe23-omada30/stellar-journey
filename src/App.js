import PlanetQuestion from './containers/PlanetQuestion';

import './App.css';

function App() {
	// Get the planet from the hash of the URL
	let planet = window.location.hash.slice(1);

	return <PlanetQuestion planet={planet}></PlanetQuestion>;
}

export default App;
