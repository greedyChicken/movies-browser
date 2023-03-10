import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import {
  fetchMovies,
  fetchMoviesSearchResults,
  selectError,
  selectLastPage,
  selectLoading,
  selectMovies,
  selectMoviesCount,
  selectPage,
} from "./moviesSlice";
import { Layout } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { TileLink } from "../../../common/TileLink";
import { useQueryParameter } from "../../../common/queryParameters";
import { searchQueryParamName } from "../../../common/queryParamNames";
import NoResultsPage from "../../../common/NoResultsPage";
import { usePage } from "../../utilities";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const page = usePage(selectPage);
  const moviesCount = useSelector(selectMoviesCount);

  useEffect(() => {
    query
      ? dispatch(fetchMoviesSearchResults({ query, page }))
      : dispatch(fetchMovies(page));
  }, [dispatch, query, page]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <>
            <PageHeader
              title={query ? `Search results for "${query}"` : `Popular movies`}
            />
            <Loader />
          </>
        ) : popularMovies?.length === 0 ? (
          <NoResultsPage query={query} />
        ) : (
          <>
            <PageHeader
              title={
                query
                  ? `Search results for "${query}" (${moviesCount})`
                  : `Popular movies`
              }
            />
            <Layout>
              {popularMovies?.map((movie) => (
                <TileLink to={`/movies/${movie.id}`} key={movie.id}>
                  <PopularMoviesTile
                    poster={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date}
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                    genres={movie.genre_ids}
                  />
                </TileLink>
              ))}
            </Layout>
            <Pagination currentPage={page} lastPage={lastPage} />
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesListPage;
