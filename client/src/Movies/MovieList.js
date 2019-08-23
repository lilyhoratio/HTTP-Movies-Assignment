import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import UpdateMovieForm from "./UpdateMovieForm"

export default class MovieList extends Component {
  // constructor(props) {
  //   console.log("movielist props", props)
  //   super(props);
  //   this.state = {
  //     movies: []
  //   };
  // }

  // define function to do get request
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/api/movies")
  //     .then(res => this.setState({ movies: res.data }))
  //     .catch(err => console.log(err.response));
  // }

  render() {
    return (
      <>
        {/* SUBROUTE - <Route exact path="/" /> */}
        <div className="movie-list">
          {this.props.movies.map(movie => (
            <MovieDetails key={movie.id} movie={movie} movies={this.props.movies} />
          ))}
        </div>

        {/* <Route
          path="/update-movie/:id"
          render={props => {
            return <UpdateMovieForm {...this.props} movies={this.state.movies} />;
          }}
        /> */}
      </>
    );
  }
}

// NOT CLASS COMPONENT - die
function MovieDetails({ movie, movies }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} movies={movies} />
    </Link>
  );
}