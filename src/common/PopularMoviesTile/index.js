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
import { nanoid } from "@reduxjs/toolkit";

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
      <Description>
        <MovieTitle>{title}</MovieTitle>
        <Release>{date}</Release>
        <Tags>
          {genres.map((genre) => (
            <TagButton key={nanoid()}>
              <Tag>{genre.name}</Tag>
            </TagButton>
          ))}
        </Tags>
        <Rating>
          <Star src={star} /> <Rate>{voteAverage}</Rate>{" "}
          <Votes>{voteCount}</Votes>
        </Rating>
      </Description>
    </TileContainer>
  );
};
