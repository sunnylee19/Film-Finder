import { get, post, remove, put } from "../common/query";
import { API_URL } from "../common/constants";


export const findCommentsForMovie = async (movieId) => {
    return await get(API_URL + `/movies/${movieId}/comments`);
};

export const postComment = async (movieId, comment) => {
    return await post(API_URL + `/movies/${movieId}/comments`, comment);
};

export const removeComment = async (commentId) => {
    return await remove(API_URL + `/comments/${commentId}`);
};

export const flagComment = async (commentId, flagged = true) => {
    return await put(API_URL + `/comments/${commentId}`, {
        flagged
    });
};

export const endorseComment = async (commentId, endorsed = true) => {
    return await put(API_URL + `/comments/${commentId}`, {
        endorsed
    });
};
