import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchMoviesApi from "../../services/fetchMoviesApi";
import styles from "../cast/Cast.module.css";
import photo from "../not-found.png";

export default class Cast extends Component {
  state = {
    actors: "",
  };

  componentDidMount() {
    fetchMoviesApi
      .fetchMovieCredits(this.props.match.params.movieId)
      .then((actors) => this.setState({ actors }));
  }

  render() {
    const { actors } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {actors &&
            actors.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : photo
                  }
                  className={styles.poster}
                  alt={name}
                />
                <p className={styles.title}>Name: {name}</p>
                <p className={styles.title}>Character: {character}</p>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  id: PropTypes.number,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
