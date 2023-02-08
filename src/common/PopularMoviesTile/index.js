import {
  Description,
  MovieTitle,
  NoMovieImage,
  NoMovieImageIcon,
  Poster,
  Rate,
  Rating,
  Release,
  Star,
  Tag,
  TagButton,
  Tags,
  TileContainer,
  Votes,
} from "./styled";
import star from "../../images/star.svg";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/movies/MoviesListPage/moviesSlice";

export const PopularMoviesTile = ({
  poster,
  posterPath,
  title,
  date,
  voteAverage,
  voteCount,
  genres,
}) => {
  const genresArray = useSelector(selectGenres);
  const movieGenres = genresArray.filter((genre) => genres.includes(genre.id));

  return (
    <TileContainer>
      {posterPath ? (
        <Poster src={poster} alt="Movie Poster"></Poster>
      ) : (
        <NoMovieImage>
          <NoMovieImageIcon />
        </NoMovieImage>
      )}
      <Description>
        <MovieTitle>{title}</MovieTitle>
        <Release>{date}</Release>
        <Tags>
          {movieGenres.map((genre) => (
            <TagButton key={genre.id}>
              <Tag>{genre.name}</Tag>
            </TagButton>
          ))}
        </Tags>
        <Rating>
          {voteCount === "0 votes" ? (
            "No votes yet"
          ) : (
            <>
              <Star src={star} /> <Rate>{voteAverage.toFixed(1)}</Rate>{" "}
              <Votes>{voteCount}</Votes>
            </>
          )}
        </Rating>
      </Description>
    </TileContainer>
  );
};
