import { APIKey, APIUrl } from "../dataAPI";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${APIUrl}/movie/popular?api_key=${APIKey}&language=en-US&page=1`
  );

  const popularMovies = await response.json();

  return popularMovies;
};

export const getGenres = async () => {
  const response = await fetch(
    `${APIUrl}/genre/movie/list?api_key=${APIKey}&language=en-US`
  );

  const genres = await response.json();

  return genres;
};

export const getMovie = async (movieId) => {
  const response = await fetch(
    `${APIUrl}/movie/${movieId}?api_key=${APIKey}&language=en-US`
  );

  const movie = await response.json();

  return movie;
};

export const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `${APIUrl}/movie/${movieId}/credits?api_key=${APIKey}&language=en-US`
  );

  const movieCredits = await response.json();

  return movieCredits;
};
