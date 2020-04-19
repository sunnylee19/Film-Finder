import { get, post, remove } from "../common/query";
import { API_URL } from "../common/constants";


export const findCommentsForMovie = async (movieId) => {
    return await get(API_URL + `/movies/${movieId}/comments`);
};

export const postComment = async (movieId, comment) => {
    return await post(API_URL + `/movies/${movieId}/comments`, comment);
};

export const removeComment = async (movieId, comment) => {
    return await remove(API_URL + `/movies/${movieId}/comments`, comment);
}
