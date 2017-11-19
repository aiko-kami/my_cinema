import React from 'react';
import Header from './Header';
import SearchModule from './SearchModule';
import MovieCard from './MovieCard';

class App extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {searchMovieTitle: {}, searchMovieId: {}, showContent:"invisibleContent"};
		this.searchMovie = this.searchMovie.bind(this);
	}
	
	// function passed to SearchModule to pass the search from the SearchModule component to the App component
	searchMovie(movieTitle, movieId, visible) {
		this.setState({searchMovieTitle: movieTitle});
		this.setState({searchMovieId: movieId});
		this.setState({showContent: visible});
	}

	render() {
		return (
			<div className="Application">
				<div className="headPart">
					<Header className="logoPart"/>
					<div className="searchPart">
						<SearchModule searchMovie={this.searchMovie} />
					</div>
				</div>
				<div id="salut" className={this.state.showContent}>
					<MovieCard data={this.state}/>
				</div>
			</div>
		)
	}
}// end App class

export default App;



