import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import fetchMoviesApi from "../../services/fetchMoviesApi";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import styles from "../movieDetailPage/movieDetailPage.module.css";
import photo from "../not-found.png";
export default class MovieDetailPage extends Component {
  state = {
    movies: "",
  };
  componentDidMount() {
    fetchMoviesApi
      .fetchMovieDetalis(this.props.match.params.movieId)
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { path, url } = this.props.match;

    const {
      poster_path,
      title,
      original_title,
      release_date,
      vote_average,
      overview,
      genres,
    } = movies;
    return (
      <>
        {movies && (
          <>
            <NavLink to="/" className={styles.link}>
              Go back
            </NavLink>
            <div className={styles.container}>
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : photo
                  }
                  className={styles.poster}
                  alt={title}
                />
              </div>
              <div className={styles.info}>
                <p className={styles.film}>
                  {original_title} ({release_date.substr(0, 4)})
                </p>
                <span className={styles.average}>
                  {" "}
                  Vote average: {vote_average}
                </span>
                <p className={styles.overview}>{overview}</p>
                <p>
                  <span className={styles.genreTitle}>Genres:</span>
                  {genres.map(({ id, name }) => (
                    <span key={id} className={styles.genre}>
                      {name}
                    </span>
                  ))}
                </p>
                <ul className={styles.linkNavigation}>
                  <li>
                    <NavLink to={`${url}/cast`} className={styles.navLink}>
                      Cast
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`${url}/reviews`} className={styles.navLink}>
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </>
        )}
      </>
    );
  }
}

MovieDetailPage.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  original_title: PropTypes.string,
  release_date: PropTypes.number,
  vote_average: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
};
