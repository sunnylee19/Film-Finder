import { post, get } from "../common/query";
import { API_URL } from "../common/constants";

export const findRatingForMovie = async (movieId) => {
    try {
        const response = await get(API_URL + `/movies/${movieId}/rating`);
        return parseFloat(response);
    } catch (ex) {
        console.log(ex);
        return null;
    }
    
};

export const findMyRatingForMovie = async (movieId) => {
    try {
        const response = await get(API_URL + `/movies/${movieId}/myRating`);
        return response.value;
    } catch (ex) {
        return null;
    }
    
}

export const rateMovie = async (movieId, val) => {
    return await post(API_URL + `/movies/${movieId}/rating`, val);
};