import React from 'react';
import ReactDOM from 'react-dom';

//Components
import SearchBar from './components/searchBar.jsx';

//CSS
import "./styles/app.css";


const App = () => {
	return (
		<div>
			<h3>Welcome to Picture Finder. Search for Tumblr images here.</h3>
			<SearchBar />
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById("app"));
