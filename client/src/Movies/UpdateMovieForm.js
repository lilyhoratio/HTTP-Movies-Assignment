import react, { useState, useEffect } from 'react'
import axios from 'axios'

const UpdateMovieForm = props => {
    const blankMovie = {
        title: "",
        director: "",
        metascore: "",
        stars: []
    }

    const [movie, setMovie] = useState(blankMovie)

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder="name"
                    value={movie.name}
                />
                <div className="baseline" />

                <input
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={movie.price}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="imageUrl"
                    onChange={changeHandler}
                    placeholder="Image"
                    value={movie.imageUrl}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Description"
                    value={movie.description}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="shipping"
                    onChange={changeHandler}
                    placeholder="Shipping"
                    value={movie.shipping}
                />
                <div className="baseline" />

                <button className="md-button form-button">Update</button>
            </form>
        </div>
    );

}