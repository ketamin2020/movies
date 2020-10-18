import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import fetchMoviesApi from "../../services/fetchMoviesApi";
import styles from "../homepage/HomePage.module.css";
import photo from "../not-found.png";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMoviesApi
      .fetchTrendingMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <ul className={styles.posterList}>
        {movies.map(({ id, poster_path, title }) => (
          <li key={id} className={styles.posterItem}>
            <NavLink to={`/movies/${id}`} className={styles.itemLink}>
              {title}{" "}
            </NavLink>
            <NavLink to={`/movies/${id}`} className={styles.imageLink}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path || photo}`}
                className={styles.poster}
                alt={title}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

HomePage.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
};
