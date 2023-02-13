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
} from "./moviesSlice";
import { Layout } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { TileLink } from "../../../common/TileLink";
import { useLocation, useParams } from "react-router-dom";
import { useQueryParameter } from "../../../common/queryParameters";
import searchQueryParamName from "../../../common/searchQueryParamName";
import NoResultsPage from "../../../common/NoResultsPage";
import { selectGenres } from "../../genresSlice";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);
  const genresArray = useSelector(selectGenres);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const params = useParams();
  const page = params.page < 1 || params.page > lastPage ? 1 : params.page;
  const { search } = useLocation();
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
        ) : popularMovies.length === 0 ? (
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
                <TileLink to={`/movies/movie/${movie.id}`} key={movie.id}>
                  <PopularMoviesTile
                    poster={`${APIImageUrl}/w342${movie.poster_path}`}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date?.slice(0, 4)}
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                    genres={genresArray.filter((genre) =>
                      movie.genre_ids.includes(genre.id)
                    )}
                  />
                </TileLink>
              ))}
            </Layout>
            <Pagination
              currentPage={page}
              lastPage={lastPage}
              type={"movies"}
              searchParam={search ?? ""}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesListPage;
