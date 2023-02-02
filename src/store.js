import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { movieReducer } from "./features/movies/MoviePage/movieSlice";
import { moviesReducer } from "./features/movies/MoviesListPage/moviesSlice";
import { peopleReducer } from "./features/people/peopleSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    movie: movieReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
