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
  Summary,
  Tag,
  TagButton,
  Tags,
  Votes,
} from "./styled";
import poster from "../../images/poster.png";
import star from "../../images/star.svg";

const MovieTile = ({ tag }) => {
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
            <Star src={star} /> <Rate>7,8</Rate>
            <Votes>/ 10</Votes> <Votes>35 votes</Votes>
          </Rating>
          <Summary>
            A young Chinese maiden disguises herself as a male warrior in order
            to save her father. Disguises herself as a male warrior in order to
            save her father. A young Chinese maiden disguises herself as a male
            warrior in order to save her father.
          </Summary>
        </MovieData>
      </MovieTileWrapper>
    </>
  );
};

export default MovieTile;
