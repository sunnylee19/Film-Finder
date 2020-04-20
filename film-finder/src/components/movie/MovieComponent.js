import React from "react";
import '../../css/movie-card-css.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";

/* npm package to install the carousel:
* https://www.npmjs.com/package/react-responsive-carousel
*  */

class MovieComponent extends React.Component {

    _renderMovie = (movie) => {
        return (
            <div className="col-md-4" key={movie.id}>
                <div className="card">
                    <img className="wbdv-recommendation-poster"
                         src={movie.posterUrl}
                         alt="Movie poster not available"/>
                    <div className="card-body">
                        <div className="card-title">
                            <div className="wbdv-movie-title">
                                <h4>
                                    <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                                </h4>
                            </div>
                        </div>
                        <div className="container">

                            <div className="row">
                                {movie.genres.map(genre => (
                                    <div className="badge badge-secondary mr-sm-1" key={genre}>
                                        {genre}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _threeMap = (list, fn) => {
        const collections = [];
        list.forEach((item, idx) => {
            if (idx % 3 === 0) {
                collections.push([]);
            }
            collections[collections.length - 1].push(item);
        });
        return collections.map(fn);
    }

    render() {
        return (
            <div>
                <Carousel>
                    {this._threeMap(this.props.movies, item => (
                        <div className="row" key={item[0].id}>
                            {item.map(movie => this._renderMovie(movie))}
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    }
}

export default MovieComponent;
