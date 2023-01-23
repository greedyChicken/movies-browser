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
import image from "../../images/poster.png";
import star from "../../images/star.svg";

export const PopularMoviesTile = ({ tag }) => {
  return (
    <TileContainer>
      <Poster src={image} alt="Movie Poster"></Poster>
      <Description>
        <MovieTitle>Mulan</MovieTitle>
        <Release>2020</Release>
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
          <Star src={star} /> <Rate>7,8</Rate> <Votes>35 votes</Votes>
        </Rating>
      </Description>
    </TileContainer>
  );
};
