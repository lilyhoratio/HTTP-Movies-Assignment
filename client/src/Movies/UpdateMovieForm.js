import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovieForm = props => {

    const blankMovie = {
        title: "",
        director: "",
        metascore: "",
        stars: []
    }

    const [movie, setMovie] = useState(blankMovie)

    // useEffect(() => {
    //     const id = props.match.params.id;
    //     const itemInArr = props.items.find(item => `${item.id}` === id);
    //     if (itemInArr) setItem(itemInArr);
    // }, [props.items, props.match.params.id]);

    const changeHandler = ev => {
        // ev.persist();
    };

    const handleSubmit = e => {
        e.preventDefault();
    };

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