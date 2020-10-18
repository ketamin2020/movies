import React, { Component } from "react";
import PropTypes from "prop-types";

import fetchMoviesApi from "../../services/fetchMoviesApi";

export default class Reviews extends Component {
  state = {
    reviews: "",
  };

  componentDidMount() {
    fetchMoviesApi
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <div>
            {reviews.length > 0 && (
              <ul>
                {reviews.map(({ id, author, content }) => (
                  <li key={id}>
                    <p> Uuthor: {author}</p>
                    <p>{content}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <h2>We do not have any reviews</h2>
        )}
      </>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
};
