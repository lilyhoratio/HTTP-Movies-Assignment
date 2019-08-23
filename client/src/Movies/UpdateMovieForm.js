import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovieForm = props => {

    console.log("update movie form props", props)

    const blankMovie = {
        title: "",
        director: "",
        metascore: "",
        stars: []
    }

    const [movie, setMovie] = useState(blankMovie)

    console.log("params movie passed in to state", movie)

    const movieId = props.match.params.id

    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${movieId}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => console.log("error", err))
    }, [props.match.params.id]);

    const changeHandler = ev => {
        // ev.persist(); // ask henry 
        setMovie({ ...movie, [ev.target.name]: ev.target.value })
    };

    // PUT REQUEST to update movie
    const handleSubmit = e => {
        e.preventDefault();
        // 1 - edit the movie (PUT)
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
            .then(res => {
                console.log("PUT TO EDIT", res)
                console.log("HERE", props.movies)
                // 2 - update MovieList component state with new movie
                // props.setMovies([...props.movies, res.data])
                // 3 - reset form to blank state
                setMovie(blankMovie)
                // 4 - reroute to movie list
                props.history.push("/")
            })
            .catch(err => console.log(err.response))
    };

    if (!movie) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="title"
                    value={movie.title}
                />
                <div className="baseline" />

                <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="director"
                    value={movie.director}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="metascore"
                    onChange={changeHandler}
                    placeholder="metascore"
                    value={movie.metascore}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="stars"
                    onChange={changeHandler}
                    placeholder="stars"
                    value={movie.stars}
                />
                <div className="baseline" />

                <button className="md-button form-button">Update</button>
            </form>
        </div>
    );
}

export default UpdateMovieForm;