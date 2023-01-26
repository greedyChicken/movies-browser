import {
  BasicInfo,
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
import starr from "../../images/vector.svg";

const MovieTile = ({ tag, starr }) => {
  return (
    <>
      <MovieTileWrapper>
        <Poster src={poster} />
        <MovieData>
          <MovieTitle>Mulan</MovieTitle>
          <ReleaseYear>2020</ReleaseYear>
          <BasicInfo>
            <Production>Production:</Production>{" "}
            <ProductionCountries>
              China, United States of America
            </ProductionCountries>
          </BasicInfo>
          <BasicInfo>
            <Production>Release:</Production>{" "}
            <ProductionCountries>24.10.2020</ProductionCountries>
          </BasicInfo>
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
            <Star src={starr} /> <Rate>7,8</Rate> <Votes>35 votes</Votes>
          </Rating>
        </MovieData>
      </MovieTileWrapper>
    </>
  );
};

export default MovieTile;
