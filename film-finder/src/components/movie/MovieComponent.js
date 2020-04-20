import React from "react";
import '../../css/movie-card-css.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";
import {Link} from "react-router-dom";

/* npm package to install the carousel:
* https://www.npmjs.com/package/react-responsive-carousel
*  */

class MovieComponent extends React.Component {

    _renderMovie = (movie, idx) => {
        const classNames = ['col-md-4', 'movie'];
        if (idx > 0) {
            classNames.push('d-none');
            classNames.push('d-md-block');
        }
        return (
            <div className={classNames.join(' ')} key={movie.id}>
                <div className="card movie">
                    <img className="wbdv-recommendation-poster homepage-movie-card"
                         src={movie.posterUrl}
                         alt="Movie poster not available"/>
                    <div className="card-body movie">
                        <div className="card-title">
                            <div className="wbdv-movie-title">
                                <h4>
                                    <Link className="stretched-link homepage-movie-link" to={`/details/${movie.id}`}>{movie.title}</Link>
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
            <div className="carousel-homepage">
                <Carousel>
                    {this._threeMap(this.props.movies, item => (
                        <div className="row carousel-row" key={item[0].id}>
                            {item.map((movie, idx) => this._renderMovie(movie, idx))}
                        </div>
                    ))}
                </Carousel>
            </div>
        )
    }
}

export default MovieComponent;
