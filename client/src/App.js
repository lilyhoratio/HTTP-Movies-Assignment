import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovieForm from "./Movies/UpdateMovieForm"
import axios from "axios"

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState([])


  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const getMovies = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => console.log(err.response));
  }

  useEffect(() => {
    getMovies()
  }, [])

  console.log("movies", movies)

  return (
    <>
      <SavedList list={savedList} />

      {/* Passing down movies state from App instead of MovieList in order to share state with form */}

      {/* <Route exact path="/" component={MovieList} /> */}
      <Route exact path="/" render={props => {
        return <MovieList {...props} movies={movies} getMovies={getMovies} />
      }} />

      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovieForm {...props} movies={movies} setMovies={setMovies} />;
        }}
      />
    </>
  );
};

export default App;