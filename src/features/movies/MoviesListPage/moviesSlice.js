import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: [],
    loading: false,
    error: false,
    page: 1,
    lastPage: 500,
  },

  reducers: {
    fetchMovies: (state, { payload: { pageNumber } }) => {
      state.loading = true;
      state.page = pageNumber;
    },

    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.loading = false;
      state.error = false;
      state.movies = movies.results;
      state.page = movies.page;
      state.lastPage = movies.total_pages < 500 ? movies.total_pages : 500;
    },
    fetchMoviesError: (state) => {
      state.error = true;
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres.genres;
    },
    fetchSearchResults: (state, { payload: { page } }) => {
      state.loading = true;
      state.page = page;
    },
    fetchSearchResultsSuccess: (state, { payload: searchResults }) => {
      state.loading = false;
      state.error = false;
      state.movies = searchResults.results;
      state.page = searchResults.page;
      state.lastPage =
        searchResults.total_pages < 500 ? searchResults.total_pages : 500;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  fetchGenres,
  fetchSearchResults,
  fetchSearchResultsSuccess,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectLastPage = (state) => selectMoviesState(state).lastPage;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectError = (state) => selectMoviesState(state).error;
export const selectGenres = (state) => selectMoviesState(state).genres;

export const moviesReducer = moviesSlice.reducer;
