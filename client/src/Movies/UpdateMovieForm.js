import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateMovieForm = props => {
  // console.log("update movie form props", props)

  const blankMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: []
  };

  const [movie, setMovie] = useState(blankMovie);

  // console.log("params movie passed in to state", movie)

  const movieId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieId}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(err => console.log("error", err));
  }, [props.match.params.id]);

  const changeHandler = ev => {
    ev.persist(); // ask henry - has to do with async?
    setMovie({ ...movie, [ev.target.name]: ev.target.value });
  };

  const starChangeHandler = (e, index) => {
    e.persist();
    let starArray = [...movie.stars]; // create array to pass in other movie stars
    starArray[index] = e.target.value; //

    setMovie({
      ...movie, // keep previous movies
      stars: starArray
    });
  };

  // PUT REQUEST to update movie
  const handleSubmit = e => {
    e.preventDefault();
    // 1 - edit the movie (PUT)
    // axios
    //   .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
    //   .then(res => {
    //     console.log("PUT REQUEST", res);
    //     // 2 - update MovieList component state with new movie
    //     // props.setMovies([...props.movies, res.data])
    //     // 3 - reset form to blank state
    //     setMovie(blankMovie);
    //     // 4 - reroute to movie list
    //     props.history.push("/");
    //   })
    //   .catch(err => console.log(err.response));

    // workaround, but shouldn't the movies list update???
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log(res);
        setMovie(blankMovie);
        let tmp = props.movies.map(movie => {
          if (`${movie.id}` === props.match.params.id) {
            return res.data;
          } else {
            return movie;
          }
        });
        props.setMovies(tmp);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie
          <input
            type="text"
            name="title"
            onChange={changeHandler}
            placeholder="title"
            value={movie.title}
          />
        </label>
        <div />

        <label>
          Director
          <input
            type="text"
            name="director"
            onChange={changeHandler}
            placeholder="director"
            value={movie.director}
          />
        </label>
        <div />
        <label>
          Metascore
          <input
            type="string"
            name="metascore"
            onChange={changeHandler}
            placeholder="metascore"
            value={movie.metascore}
          />
        </label>
        <div />

        <label>
          Stars
          {movie.stars.map((starName, index) => {
            return (
              <input
                type="string"
                name="stars"
                onChange={e => starChangeHandler(e, index)}
                placeholder="stars"
                value={starName}
              />
            );
          })}
        </label>
        <div />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateMovieForm;
