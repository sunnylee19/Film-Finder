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
            const [recommendedMovies, popular] = await Promise.all([getMyRecommendations(), getPopularMovies()]);
            this.setState({movies: await Promise.all(recommendedMovies.slice(0, 21).map(id => findMovieById(id))), popular});
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
                <div className="text-center mt-5">
                    <h1>Hello {user.firstName}!</h1>
                </div>
                }
                
                {movies &&
                <div className="text-center mt-5">
                    <h2>Your Recommendations</h2>
                </div>
                }
                {movies &&
                <div>
                    <MovieListComponent movies={movies}/>
                </div>
                }
                {popular &&
                <div className="text-center mt-5">
                    <h2>What's Popular</h2>
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
