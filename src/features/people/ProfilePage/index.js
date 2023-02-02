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
  selectLoading,
  selectMovies,
} from "./moviesSlice";
import { Layout } from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { nanoid } from "@reduxjs/toolkit";
import BigPersonTile from "../../../common/BigPersonTile";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectMovies);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const genresArray = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <>
            <PageHeader title="Movies Cast" />
            <Loader />
          </>
        ) : (
          <>
            <BigPersonTile
              personname={"Liu Yifei"}
              datebirth={"25.08.1987"}
              placebirth={"Wuhan, Hubei, China"}
              biography={
                "Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10            with her mother, Liu lived there for four years."
              }
            />
            <PageHeader title="Movies Cast" />

            <Layout>
              {popularMovies?.map((movie) => (
                <PopularMoviesTile
                  key={nanoid()}
                  poster={`${APIImageUrl}/original${movie.poster_path}`}
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

export default ProfilePage;
