import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import BigMovieTile from "./BigMovieTile";
import { Container } from "../../../common/Container";
import ErrorPage from "../../../common/ErrorPage";
import { Layout } from "../../../common/Layout/styled";
import Loader from "../../../common/Loader";
import MovieTile from "./MovieTile";
import PageHeader from "../../../common/PageHeader";
import { PersonTile } from "../../../common/PersonTile";
import { TileLink } from "../../../common/TileLink";
import { APIImageUrl } from "../../dataAPI";
import {
  fetchMovie,
  selectError,
  selectLoading,
  selectMovie,
  selectMovieCredits,
} from "./movieSlice";
import { Wrapper } from "./styled";
import { getPeople } from "../../utilities";

const MoviePage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const movieCredits = useSelector(selectMovieCredits);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchMovie(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error || !movie?.id ? (
        <ErrorPage />
      ) : (
        <>
          <BigMovieTile
            poster={
              movie.backdrop_path &&
              `${APIImageUrl}/original${movie.backdrop_path}`
            }
          />
          <Container>
            <MovieTile
              title={movie.title}
              releaseYear={movie.release_date}
              releaseDate={movie.release_date}
              productionCountries={movie.production_countries}
              overview={movie.overview}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              poster={`${APIImageUrl}/h632${movie.poster_path}`}
              tags={movie.genres}
            />
            {movieCredits.cast.length > 0 && (
              <Wrapper>
                <PageHeader title="Cast" />
                <Layout>
                  {getPeople(movieCredits.cast, 12).map((person) => (
                    <TileLink to={`/people/1/${person.id}`} key={person.id}>
                      <PersonTile
                        profile={`${APIImageUrl}/w185${person.profile_path}`}
                        profilePath={person.profile_path}
                        fullName={person.name}
                        role={person.character}
                      />
                    </TileLink>
                  ))}
                </Layout>
              </Wrapper>
            )}
            {movieCredits.crew.length > 0 && (
              <Wrapper>
                <PageHeader title="Crew" />
                <Layout>
                  {getPeople(movieCredits.crew, 10).map((person) => (
                    <TileLink to={`/people/1/${person.id}`} key={person.id}>
                      <PersonTile
                        profile={`${APIImageUrl}/w185${person.profile_path}`}
                        profilePath={person.profile_path}
                        fullName={person.name}
                        role={person.department}
                      />
                    </TileLink>
                  ))}
                </Layout>
              </Wrapper>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default MoviePage;
