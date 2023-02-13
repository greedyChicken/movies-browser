import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: false,
    lastPage: 500,
    moviesCount: null,
  },

  reducers: {
    fetchMovies: (state, { payload: { pageNumber } }) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = false;
      state.error = false;
      state.movies = movies.results;
      state.lastPage = movies.total_pages < 500 ? movies.total_pages : 500;
      state.moviesCount = movies.total_results;
    },
    fetchMoviesError: (state) => {
      state.error = true;
    },
    fetchMoviesSearchResults: (state, { payload: { page } }) => {
      state.loading = true;
    },
    fetchMoviesSearchResultsSuccess: (state, { payload: results }) => {
      state.loading = false;
      state.error = false;
      state.movies = results.results;
      state.lastPage = results.total_pages < 500 ? results.total_pages : 500;
      state.moviesCount = results.total_results;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchMoviesSearchResults,
  fetchMoviesSearchResultsSuccess,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLastPage = (state) => selectMoviesState(state).lastPage;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectMoviesCount = (state) =>
  selectMoviesState(state).moviesCount;

export const moviesReducer = moviesSlice.reducer;
