import React from 'react';
import $ from 'jquery';

//IMPORT KEY
import config from '../secret/config';

class SearchBar extends React.Component {
	 constructor(props) {
    super(props);
    this.state = {tag: "", photos: [], timestamp: 0};

  	this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
  	this.setState({tag: event.target.value});
  }

  fetchPhotos() {

  	//CHECKING URL STATE
  	let url;
		let api = `https://api.tumblr.com/v2/tagged?tag=${this.state.tag}`
		let key = `&api_key=${config.key}`

		//USE TIMESTAMP TO CHECK FOR PHOTOS BEFORE CURRENT TIME
		if(this.state.timestamp === 0){
			url =  `${api}${key}`
		} else {
			url = `${api}before=${this.state.timestamp}${key}`
		}

		//FETCH PHOTOS
  	 $.ajax({
   		type: 'GET',
      url: url,
      success: ((data) => {
      	let tumblrPosts = data.response
      	let images = tumblrPosts.filter((post, idx) => post.type === "photo")
      	if(this.state.photos.length){
      		this.setState({photos: this.state.photos.concat(images)})
      	} else {
	      	this.setState({photos: images})
      	}
	      	this.setState({timestamp: this.state.photos[this.state.photos.length-1].timestamp - 20})
      })
  	});

	 }

	handleSubmit(e) {
		e.preventDefault();
		if(this.state.tag === ""){
			alert('Please enter a tag')
		} else  {
			this.fetchPhotos();
		}
  }

	componentDidMount() {
		let self = this;
		$(document).scroll((e) => {

		  let scrollAmount = $(window).scrollTop();
		  let documentHeight = $(document).height();
		  let scrollPercent = (scrollAmount/documentHeight) * 100;

		  //CHECK PERCENTAGE SCROLLED
		  if (scrollPercent > 50) {
		     load(self);
		  }

		  //FETCH PHOTOS
		   function load (self) { 
		     self.fetchPhotos()
		  }
   	})
  }

	render (){
    let items = [];
		this.state.photos.map((photo, idx) => (
			items.push(
				<div className="images" key={'d'+ idx}>
					<a key={'a'+idx} href={photo.post_url}>
					<img key={idx} src={photo.photos[0].original_size.url} />
					</a>
				</div>)))

		let display;
		if(this.state.tag === ""){
			display = ""
		} else if (items.length === 0){
			display =  <p className="loading">Loading...</p>
		} else {
			display = items
		}

		return (
			<div>
				<div className="search-bar">
					<form onSubmit={this.handleSubmit}>
		          <input type="text" 
		          onChange={this.handleChange} 
		          className="searchTerm" 
							placeholder="Enter a tag & find a Tumblr blog!" />
		        <input className="button" type="submit" value="Submit"></input>
		      </form>
				</div>

				<div className="grid-container">
					{display}
				</div>
			</div>
		)
	}
}

export default SearchBar;
