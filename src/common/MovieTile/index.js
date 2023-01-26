import {
  MovieData,
  MovieTileWrapper,
  MovieTitle,
  Poster,
  Production,
  ProductionCountries,
  Rate,
  Rating,
  ReleaseYear,
  Star,
  Tag,
  TagButton,
  Tags,
  Votes,
} from "./styled";
import poster from "../../images/poster.png";

const MovieTile = ({ tag, star }) => {
  return (
    <>
      <MovieTileWrapper>
        <Poster src={poster} />
        <MovieData>
          <MovieTitle>Mulan</MovieTitle>
          <ReleaseYear>2020</ReleaseYear>
          <Production>Production:</Production>{" "}
          <ProductionCountries>
            China, United States of America
          </ProductionCountries>
          <Production>Release:</Production>{" "}
          <ProductionCountries>24.10.2020</ProductionCountries>
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
        </MovieData>
      </MovieTileWrapper>
    </>
  );
};

export default MovieTile;
