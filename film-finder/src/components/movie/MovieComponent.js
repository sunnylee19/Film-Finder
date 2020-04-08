import React from "react";
import '../../css/movie-card-css.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";

/* npm package to install the carousel:
* https://www.npmjs.com/package/react-responsive-carousel
*  */

class MovieComponent extends React.Component {

    render() {
        return (
            <div>
                <Carousel>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <img className="card-img"
                                     src="https://mypostercollection.com/wp-content/uploads/2018/05/Zootopia-Poster-1.jpg"
                                     alt="Movie poster not available"/>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <div>
                                        <div className="h1">Zootopia</div>
                                        <div className="h2">4.9/5</div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="badge badge-secondary mr-sm-1">
                                            Action
                                        </div>
                                        <div className="badge badge-secondary mr-sm-1">
                                            Adventure
                                        </div>
                                        <div className="badge badge-secondary mr-sm-1">
                                            Animation
                                        </div>
                                        <div className="badge badge-secondary mr-sm-1">
                                            Comedy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <img className="card-img"
                                     src="https://mypostercollection.com/wp-content/uploads/2018/08/The-Lion-King-Poster-1994-MyPosterCollection.com-5-689x1024.jpg"
                                     alt="Movie poster not available"/>
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                    <div>
                                        <div className="h1">The Lion King</div>
                                        <div className="h2">5.0/5</div>
                                    </div>
                                </div>
                                <div className="container">

                                    <div className="row">
                                        <div className="badge badge-secondary mr-sm-1">
                                            Action
                                        </div>
                                        <div className="badge badge-secondary mr-sm-1">
                                            Disney
                                        </div>
                                        <div className="badge badge-secondary mr-sm-1">
                                            Kids
                                        </div>
                                        <div className="badge badge-secondary mr-sm-1">
                                            Classic
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <img className="card-img"
                                         src="https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episode-8-2017-Printable-Poster-MyPosterCollection.com-5-691x1024.jpg"
                                         alt="Movie poster not available"/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <div>
                                            <div className="h1">Star Wars: The Last Jedi</div>
                                            <div className="h2">4.8/5</div>
                                        </div>
                                    </div>
                                    <div className="container">

                                        <div className="row">
                                            <div className="badge badge-secondary mr-sm-1">
                                                Action
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Science Fiction
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Best Actress
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Blockbuster
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <img className="card-img"
                                         src="https://mypostercollection.com/wp-content/uploads/2019/09/chp-3.jpg"
                                         alt="Movie poster not available"/>
                                </div>

                                <div className="card-body">
                                    <div className="card-title">
                                        <div>
                                            <div className="h1">John Wick</div>
                                            <div className="h2">4.7/5</div>
                                        </div>
                                    </div>
                                    <div className="container">

                                        <div className="row">
                                            <div className="badge badge-secondary mr-sm-1">
                                                Action
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Adventure
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Best Actor
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Drama
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <img className="card-img"
                                         src="https://mypostercollection.com/wp-content/uploads/2019/08/sonic-movie-1-692x1024.jpg"
                                         alt="Movie poster not available"/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <div>
                                            <div className="h1">Sonic The Hedgehog</div>
                                            <div className="h2">No Rating Yet</div>
                                        </div>
                                    </div>
                                    <div className="container">

                                        <div className="row">
                                            <div className="badge badge-secondary mr-sm-1">
                                                Action
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Adventure
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                CGI
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Fantasy
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <img className="card-img"
                                         src="https://mypostercollection.com/wp-content/uploads/2018/06/Black-Panther-hd-printable-Poster-MyPosterCollection.com-official-poster.jpg"
                                         alt="Movie poster not available"/>
                                </div>
                                <div className="card-body">
                                    <div className="card-title">
                                        <div>
                                            <div className="h1">Black Panther</div>
                                            <div className="h2">4.6/5</div>
                                        </div>
                                    </div>
                                    <div className="container">

                                        <div className="row">
                                            <div className="badge badge-secondary mr-sm-1">
                                                Action
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Superheroes
                                            </div>
                                            <div className="badge badge-secondary mr-sm-1">
                                                Marvel
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default MovieComponent;
