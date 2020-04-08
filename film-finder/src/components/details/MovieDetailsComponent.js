import React, {useEffect, useState} from 'react';
import {findMovieById} from '../../services/MovieService';
import '../../css/details-page-css.css'
import NavBarComponent from '../common/NavBarComponent';
import MovieCommentListComponent from './MovieCommentListComponent';

export default ({match}) => {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        (async () => {
            const movie = await findMovieById(match.params.movieId);
            setMovie(movie);
        })();
    }, [match.params.movieId]);
    return (
        <div>
            <NavBarComponent/>
            {movie &&
             <div className="container">
                 <div className="row">
                     <div className="col-12 col-md-3">
                         <img src={movie.posterUrl} className="movie-poster"/>
                     </div>
                     <div className="col-12 col-md-9">
                         <div className="card">
                             <div className="card-body">
                                 <h2 className="movie-title">
                                     {movie.title} {movie.releaseDate.isValid() && '(' + movie.releaseDate.format('YYYY') + ')'}
                                 </h2>
                                 <hr/>
                                 <div className="movie-genres">
                                     {movie.genres.join(', ')}
                                 </div>
                                 <br/>
                                 {/* <hr/> */}
                                 Director: {movie.director}
                                 <br/>
                                 {movie.releaseDate.isValid() && 'Released: ' + movie.releaseDate.format('MMMM Qo, YYYY')}
                                 <br/><br/>
                                 <h3>
                                     Summary
                                 </h3>
                                 <hr/>
                                 <p>
                                     {movie.plot}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-12">
                         <div className="card">
                             <div className="card-body">
                                 <h4>Comments</h4>
                                 <hr/>
                                  {movie &&
                                  <MovieCommentListComponent id={movie.id}/>}
                             </div>
                         </div>


                     </div>
                 </div>
             </div>
            }
        </div>
    );
};
