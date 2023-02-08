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
  selectLastPage,
  selectLoading,
  selectMovies,
} from "./moviesSlice";
import { Layout } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { TileLink } from "../../../common/TileLink";
import { useLocation, useParams } from "react-router-dom";
import { useQueryParameter } from "../../../common/queryParameters";
import searchQueryParamName from "../../../common/searchQueryParamName";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const params = useParams();
  const page = params.page;
  const { search } = useLocation();

  useEffect(() => {
    query
      ? dispatch(fetchSearchResults({ query, page }))
      : dispatch(fetchMovies(page));
  }, [dispatch, query, page]);

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
              {popularMovies?.map((movie) => (
                <TileLink to={`/movies/movie/${movie.id}`} key={movie.id}>
                  <PopularMoviesTile
                    poster={`${APIImageUrl}/original${movie.poster_path}`}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date?.slice(0, 4)}
                    voteAverage={movie.vote_average}
                    voteCount={`${movie.vote_count} votes`}
                    genres={movie.genre_ids}
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
