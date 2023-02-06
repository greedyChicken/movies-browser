import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import {
  fetchMovies,
  selectError,
  selectGenres,
  selectLastPage,
  selectLoading,
  selectMovies,
} from "./moviesSlice";
import { Layout } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { TileLink } from "../../../common/TileLink";
import { useParams } from "react-router-dom";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const genresArray = useSelector(selectGenres);
  const lastPage = useSelector(selectLastPage);
  const params = useParams();
  const page = params.page;

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

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
                <TileLink to={`/movies/${page}/${movie.id}`} key={movie.id}>
                  <PopularMoviesTile
                    poster={`${APIImageUrl}/original${movie.poster_path}`}
                    posterPath={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date?.slice(0, 4)}
                    voteAverage={movie.vote_average}
                    voteCount={`${movie.vote_count} votes`}
                    genres={genresArray.filter((genre) =>
                      movie.genre_ids.includes(genre.id)
                    )}
                  />
                </TileLink>
              ))}
            </Layout>
            <Pagination
              currentPage={params.page}
              lastPage={lastPage}
              type={"movies"}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default MoviesListPage;
