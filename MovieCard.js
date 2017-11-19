import React from 'react';
let backdropIMG;


class MovieCard extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {data: {}};

	}

	render() {
		let 	posterIMG = 'https://image.tmdb.org/t/p/w500' + this.state.poster;
				backdropIMG = 'https://image.tmdb.org/t/p/original' + this.state.backdrop;

		return (
			<div className="movieCard">
				<div className="main-description">
					<h1>{this.state.original_title}</h1>
					<span className="tagline">{this.state.tagline}</span>
					<p>{this.state.overview}</p>
						<div className="details">
							<div className="col1"> Original Release: <span className="data">{this.state.release}</span></div>
							<div className="col2"> Running Time: <span className="data">{this.state.runtime} mins</span> </div>
							<div className="col3"> Vote Average: <span className="data">{this.state.vote}</span></div>
						</div>
				</div>
				<div className="poster-container">
					<aside><img className='poster' src={posterIMG} alt="Poster"/></aside>
				</div>
			</div>
		)
	}
	componentDidUpdate() {
		document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
	}
	// lifecycle founction to fetch the movie information with ThemovieDB API
	// (invoked immediately before rendering when new props or state are being received)
	componentWillUpdate(movieId) {
		// if movie not found, display error
		if (movieId.data.searchMovieId == null) {
			this.setState({
	     		movieID: "xxxxxx",
				original_title: "I did not found your Movie",
				overview: "Sorry...",
				poster: "I did not found your Movie",
				release: "Not yet released",
				vote: "Wahou/10",
				runtime: "XXX",
				backdrop: "I did not found your Movie",
				tagline: "Damn !"
			});
		}
		// if information found, put data in the state
		else {
			let url = `https://api.themoviedb.org/3/movie/${movieId.data.searchMovieId}?&api_key=cfe422613b250f702980a3bbf9e90716`

			fetch(url).then((res) => res.json()).then((data) => {
				
				this.setState({
		     		movieID: data.id,
					original_title: data.original_title,
					overview: data.overview,
					poster: data.poster_path,
					release: data.release_date,
					vote: data.vote_average + " /10",
					runtime: data.runtime,
					backdrop: data.backdrop_path,
					tagline: data.tagline
				});
			})
		}
	} // end of componentWillUpdate function
} // end MovieCard class

export default MovieCard;