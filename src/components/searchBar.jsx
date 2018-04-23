import React from 'react';

const SearchBar = () => {
	
	return (
		<div className="search">
			<input type="text" className="searchTerm" placeholder="Search here"></input>
      		<button type="submit" className="searchButton"></button>
		</div>
	)
}

export default SearchBar;
