import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class SearchModule extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {moviesTitles: {}};
		this.fetchApi = this.fetchApi.bind(this);
		this.submit = this.submit.bind(this);
		
	}

	render() {
		return(
			<span className="formSearch">
				<form className="searchBar" onSubmit={this.submit.bind(this)} >
					<input type="search" onChange={(e) => this.fetchApi(e)} required placeholder="Search a Movie Title..." ref={(input) => this.input = input} list="films" />
						<datalist id="films">
							<option value={this.state.moviesTitles[0]} />
							<option value={this.state.moviesTitles[1]} />
							<option value={this.state.moviesTitles[2]} />
							<option value={this.state.moviesTitles[3]} />
							<option value={this.state.moviesTitles[4]} />
						</datalist>
						&nbsp;&nbsp;<button className="pure-button" type="submit">Go!&nbsp;<i className="fa fa-arrow-circle-right"></i></button>
				</form>
			</span>
		)		
	}


	// Founction to search a movie title with ThemovieDB API
	fetchApi(event) {
		let search = event.target.value;
		console.log(search);
		let url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cfe422613b250f702980a3bbf9e90716`

		fetch(url).then((res) => res.json()).then((data) => {
			
			var moviesTitles = {};
			var moviesIds = {};

			for (var i = 0 ; i < data.results.length; i++) {
				moviesTitles[i] = data.results[i].original_title; 
				moviesIds[i] = data.results[i].id; 
			}

			this.setState({moviesTitles});
			this.setState({moviesIds});
		 })
	} // end fetchApi function

	// function to submit the search and generate the movie card
	submit(event) {
		event.preventDefault();
		this.props.searchMovie(this.input.value, this.state.moviesIds[0], "visibleContent");
	}
} // end SearchModule class

export default SearchModule;
