/* Same design as assignments for services and reducers. */

import {OMDB_MOVIES_URL} from "../common/constants";

export const createMovie = async (movie) => {
    let response = await fetch(OMDB_MOVIES_URL, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    })
    return await response.json()
}

export const deleteMovie = async (movieId) => {
    let response = await fetch(`${OMDB_MOVIES_URL}/${movieId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const updateMovie = async (movieId, movie) => {

}

export const findAllMovies = async () => {

}

export const findResultForMovie = async () => {

}
