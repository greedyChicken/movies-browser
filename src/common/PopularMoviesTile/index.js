import {
  Description,
  InfoContainer,
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

export const PopularMoviesTile = ({
  poster,
  posterPath,
  title,
  date,
  voteAverage,
  voteCount,
  genres,
}) => {
  return (
    <TileContainer>
      {posterPath ? (
        <Poster src={poster} alt="Movie Poster"></Poster>
      ) : (
        <NoMovieImage>
          <NoMovieImageIcon />
        </NoMovieImage>
      )}

      <InfoContainer>
        <Description>
          <MovieTitle>{title}</MovieTitle>
          <Release>{date}</Release>
          <Tags>
            {genres.map((genre) => (
              <TagButton key={genre.id}>
                <Tag>{genre.name}</Tag>
              </TagButton>
            ))}
          </Tags>
        </Description>
        <Rating>
          {voteCount ? (
            <>
              <Star src={star} /> <Rate>{voteAverage.toFixed(1)}</Rate>{" "}
              <Votes>{voteCount} votes</Votes>
            </>
          ) : (
            <Votes>No votes yet</Votes>
          )}
        </Rating>
      </InfoContainer>
    </TileContainer>
  );
};
