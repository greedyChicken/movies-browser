import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import { fetchMovies, selectMovies } from "../popularMoviesSlice";
import { Layout } from "./styled";

const MoviesListPage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        <PageHeader title="Popular Movies" />
        <Layout>
          {popularMovies?.map((movie, index) => (
            <PopularMoviesTile
              key={index}
              poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              title={movie.title}
              date={movie.release_date.slice(0, 4)}
              voteAverage={movie.vote_average}
              voteCount={`${movie.vote_count} votes`}
            />
          ))}
        </Layout>
      </Container>
    </>
  );
};

export default MoviesListPage;
