import React, { useEffect, useState } from 'react';
import withUser from "../../common/withUser";
import Rating from '@material-ui/lab/Rating';
import { findRatingForMovie, findMyRatingForMovie, rateMovie } from '../../services/RatingService';

export default withUser(props => {
    const [avgRating, setAvgRating] = useState(null);
    const [myRating, setMyRating] = useState(null);
    const {user} = props;
    const getRating = async () => {
        const rating = await findRatingForMovie(props.movieId);
        setAvgRating(rating);
    };
    const getMyRating = async () => {
        if (!props.user) return;
        const rating = await findMyRatingForMovie(props.movieId);
        setMyRating(rating);
    };

    useEffect(() => {
        getRating();
        getMyRating();
    }, [props.movieId, props.user]);

    const handleRatingChange = async (_, value) => {
        value = parseInt(value);
        await rateMovie(props.movieId, value);
        setMyRating(value);
        getRating();
    };

    return (
        <div>
            Average Rating: {<Rating readOnly={true} value={avgRating}/>}
            <br/>
            {user && <span>Your Rating: <Rating name="my-rating" value={myRating} onChange={handleRatingChange}/></span>}
        </div>
    );
});