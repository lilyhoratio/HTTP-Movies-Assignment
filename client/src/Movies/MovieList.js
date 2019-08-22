import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  deleteMovie = id => {
    console.log("delete")
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} deleteMovie={this.deleteMovie} />
        ))}
      </div>
    );
  }
}

function MovieDetails(props) {
  // console.log(props)
  return (
    <Link to={`/movies/${props.movie.id}`}>
      <MovieCard movie={props.movie} deleteMovie={props.deleteMovie} />
    </Link>
  );
}
