import React from 'react';

const SearchBar = () => {
	//TUMBLR API 
	return (
		<div>
		<div className="searchbar">
			<input type="text" className="searchTerm" placeholder="Search here"></input>
      		<button type="submit" className="searchButton"></button>
		</div>
			<div className="grid-container">Images</div>
		</div>
	)
}

export default SearchBar;
