const API_KEY = "f143197e3704508a07cd80f040af7920";

const fetchTrendingMovies = () => {
  const qweryString = `//api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  return fetch(qweryString).then((respons) =>
    respons.json().then((data) => data.results)
  );
};

const fetchSearchMovies = (qwery) => {
  const searchString = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${qwery}&page=1`;
  return fetch(searchString).then((respons) =>
    respons.json().then((data) => data.results)
  );
};
const fetchMovieDetalis = (id) => {
  const detalisQwery = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  return fetch(detalisQwery).then((respons) =>
    respons.json().then((data) => data)
  );
};

const fetchMovieCredits = (id) => {
  const detalisQwery = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  return fetch(detalisQwery).then((respons) =>
    respons.json().then((data) => data.cast)
  );
};

const fetchMovieReviews = (id) => {
  const reviewsQwery = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  return fetch(reviewsQwery).then((respons) =>
    respons.json().then((data) => data.results)
  );
};

export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetalis,
  fetchMovieCredits,
  fetchMovieReviews,
};
