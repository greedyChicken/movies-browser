import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    loading: false,
    error: false,
    page: 1,
  },

  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = false;
      state.error = false;
      state.movies = movies.results;
      state.page = movies.page;
    },
    fetchMoviesError: (state) => {
      state.error = true;
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres.genres;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectGenres = (state) => selectMoviesState(state).genres;

export const selectMoviesByQuery = (state, query) => {
  const movies = selectMovies(state);

  if (!query || query.trim() === "") {
    return movies;
  }

  return movies.filter(({ title }) =>
    title.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export const moviesReducer = moviesSlice.reducer;
