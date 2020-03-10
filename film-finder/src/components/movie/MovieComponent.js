import React from "react";
import '../../css/movie-card-css.css';

class MovieComponent extends React.Component {

    render() {
        return (
            <div>

                <div className="col-md-6 card-body container">
                    <div className="row flex-column-reverse flex-md-row">
                        <div className="col-md-5">
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
                    </div>
                </div>


            </div>
        )
    }
}

export default MovieComponent;
