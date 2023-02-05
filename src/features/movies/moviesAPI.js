import { APIKey, APIUrl } from "../dataAPI";

export const getPopularMovies = async (pageNumber) => {
  const response = await fetch(
    `${APIUrl}/movie/popular?api_key=${APIKey}&language=en-US&page=${pageNumber}`
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

export const getSearchResults = async (query, pageNumber) => {
  const response = await fetch(
    `${APIUrl}/search/movie?api_key=${APIKey}&language=en-US&query=${query}&page=${pageNumber}`
  );

  const searchResults = await response.json();

  return searchResults;
};
