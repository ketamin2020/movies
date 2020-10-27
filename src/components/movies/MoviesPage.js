import React, { Component } from "react";
import SearchForm from "../searchForm/SearchForm";
import PropTypes from "prop-types";
import parsedQuery from "../../utils/queryStringParser";
import fetchMoviesApi from "../../services/fetchMoviesApi";
import { NavLink } from "react-router-dom";
import styles from "../movies/MoviesPage.module.css";
import photo from "../not-found.png";

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    const { query } = parsedQuery(this.props.location.search);
    if (query) {
      fetchMoviesApi
        .fetchSearchMovies(query)
        .then((movies) => this.setState({ movies }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parsedQuery(prevProps.location.search);
    const { query: nextQuery } = parsedQuery(this.props.location.search);
    if (prevQuery !== nextQuery) {
      fetchMoviesApi
        .fetchSearchMovies(nextQuery)
        .then((movies) => this.setState({ movies }));
    }
  }

  heandleChangeQuery = (query) => {
    if (query) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });
    }
  };

  render() {
    const { movies } = this.state;
    const { url } = this.props.match;
    console.log("moviePage", this.props);

    return (
      <>
        <SearchForm onSubmit={this.heandleChangeQuery} />

        <ul className={styles.posterList}>
          {movies.length > 0 &&
            movies.map(({ id, original_title, poster_path, title }) => (
              <li key={id} className={styles.posterItem}>
                <NavLink
                  to={{
                    pathname: `${url}/${id}`,
                    state: { from: this.props.location },
                  }}
                  className={styles.itemLink}
                >
                  {original_title}
                </NavLink>
                <NavLink
                  to={{
                    pathname: `${url}/${id}`,
                    state: { from: this.props.location },
                  }}
                  className={styles.imageLink}
                >
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : photo
                    }
                    className={styles.poster}
                    alt={title}
                  />
                </NavLink>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

MoviesPage.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  original_title: PropTypes.string,
  id: PropTypes.string,
};
