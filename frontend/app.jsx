import React from 'react';
import ReactDOM from 'react-dom';

//Components
import SearchBar from './components/searchBar.jsx';

//CSS
import "./styles/app.css";


const App = () => {
	return (
		<div className="main-container">
			<h3>Picture Galore</h3>
			<SearchBar />
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById("app"));
