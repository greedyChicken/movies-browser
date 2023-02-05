import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import {
  fetchMovies,
  fetchSearchResults,
  selectError,
  selectGenres,
  selectLoading,
  selectMovies,
  selectPage,
} from "./moviesSlice";
import { Layout } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { nanoid } from "@reduxjs/toolkit";
import searchQueryParamName from "../../../common/searchQueryParamName";
import { useQueryParameter } from "../../../common/queryParameters";

const MoviesListPage = () => {
  const query = useQueryParameter(searchQueryParamName);
  const movies = useSelector(selectMovies);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const genresArray = useSelector(selectGenres);
  const pageNumber = useSelector(selectPage);

  const dispatch = useDispatch();

  useEffect(() => {
    query && query !== ""
      ? dispatch(fetchSearchResults({ query }))
      : dispatch(fetchMovies(pageNumber));
  }, [dispatch, query]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <>
            <PageHeader title="Popular Movies" />
            <Loader />
          </>
        ) : (
          <>
            <PageHeader title="Popular Movies" />
            <Layout>
              {movies?.map((movie) => (
                <PopularMoviesTile
                  key={nanoid()}
                  poster={`${APIImageUrl}/original${movie.poster_path}`}
                  posterPath={movie.poster_path}
                  title={movie.title}
                  date={movie.release_date.slice(0, 4)}
                  voteAverage={movie.vote_average}
                  voteCount={`${movie.vote_count} votes`}
                  genres={genresArray.filter((genre) =>
                    movie.genre_ids.includes(genre.id)
                  )}
                />
              ))}
            </Layout>
            <Pagination />
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesListPage;
