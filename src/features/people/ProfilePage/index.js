import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import BigPersonTile from "./BigPersonTile";
import {
  selectPerson,
  fetchPersonId,
  selectPersonCredits,
  selectError,
  selectLoading,
} from "./personSlice";
import { useParams } from "react-router-dom";
import { Layout } from "./styled";
import { TileLink } from "../../../common/TileLink";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import { getNonDuplicatedItems } from "../../utilities";

const PersonPage = () => {
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const personCredits = useSelector(selectPersonCredits);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPersonId(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error || !person?.id ? (
          <ErrorPage />
        ) : (
          <>
            <BigPersonTile
              poster={person.profile_path}
              name={person.name}
              birthday={person.birthday}
              birthplace={person.place_of_birth}
              biography={person.biography}
            />
            {personCredits.cast.length > 0 && (
              <>
                <PageHeader
                  title={`Movies - cast (${personCredits.cast.length})`}
                />
                <Layout>
                  {getNonDuplicatedItems(personCredits.cast, 12).map(
                    (movie) => (
                      <TileLink to={`/movies/movie/${movie.id}`} key={movie.id}>
                        <PopularMoviesTile
                          poster={movie.poster_path}
                          posterPath={movie.poster_path}
                          title={movie.title}
                          date={movie.release_date}
                          voteAverage={movie.vote_average}
                          voteCount={movie.vote_count}
                          genres={movie.genre_ids}
                        />
                      </TileLink>
                    )
                  )}
                </Layout>
              </>
            )}
            {personCredits.crew.length > 0 && (
              <>
                <PageHeader
                  title={`Movies - crew (${personCredits.crew.length})`}
                />
                <Layout>
                  {getNonDuplicatedItems(personCredits.crew, 12).map(
                    (movie) => (
                      <TileLink to={`/movies/movie/${movie.id}`} key={movie.id}>
                        <PopularMoviesTile
                          poster={movie.poster_path}
                          posterPath={movie.poster_path}
                          title={movie.title}
                          date={movie.release_date}
                          voteAverage={movie.vote_average}
                          voteCount={movie.vote_count}
                          genres={movie.genre_ids}
                        />
                      </TileLink>
                    )
                  )}
                </Layout>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default PersonPage;
