import React from "react";
import MovieListComponent from "../movie/MovieListComponent";
import withUser from '../../common/withUser';
import { getMyRecommendations } from '../../services/UserService';
import { findMovieById, getPopularMovies } from '../../services/MovieService';

class RecommendationComponent extends React.Component {

    state = {
        movies: null,
        popular: null
    }

    getRecs = async () => {
        if (this.props.user !== null) {
            const [movies, popular] = await Promise.all([getMyRecommendations(), getPopularMovies()]);
            this.setState({movies: movies.slice(0, 21), popular});
        } else {
            this.setState({popular: await getPopularMovies()});
        }
    }

    componentDidMount() {
        this.getRecs();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user !== prevProps.user) {
            this.getRecs();
        }
    }


    render() {
        const {user} = this.props;
        const {movies, popular} = this.state;
        return (
            <div>
                {user &&
                <div className="welcome-text text-center mt-5">
                    <h2 className="welcome-text">Hello {user.firstName}!</h2>
                </div>
                }
                
                {user && movies && movies.length > 0 &&
                <div className="welcome-text text-center mt-5">
                    <h2 className="welcome-text">Your Recommendations</h2>
                </div>
                }
                {user && movies && movies.length > 0 &&
                <div>
                    <MovieListComponent movies={movies}/>
                </div>
                }
                {popular &&
                 <div className="welcome-text text-center mt-5">
                     <h2 className="welcome-text">What's Popular</h2>
                 </div>
                }
                {popular &&
                <div>
                    <MovieListComponent movies={popular}/>
                </div>}
            </div>
        )
    }
}

export default withUser(RecommendationComponent);
