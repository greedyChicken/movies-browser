import {
  Description,
  MovieTitle,
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
  title,
  date,
  voteAverage,
  voteCount,
  tag,
}) => {
  return (
    <TileContainer>
      <Poster src={poster} alt="Movie Poster"></Poster>
      <Description>
        <MovieTitle>{title}</MovieTitle>
        <Release>{date}</Release>
        <Tags>
          <TagButton>
            <Tag>{(tag = "Action")}</Tag>{" "}
          </TagButton>{" "}
          <TagButton>
            <Tag>{(tag = "Adventure")}</Tag>{" "}
          </TagButton>{" "}
          <TagButton>
            <Tag>{(tag = "Drama")}</Tag>{" "}
          </TagButton>
        </Tags>
        <Rating>
          <Star src={star} /> <Rate>{voteAverage}</Rate>{" "}
          <Votes>{voteCount} votes</Votes>
        </Rating>
      </Description>
    </TileContainer>
  );
};
