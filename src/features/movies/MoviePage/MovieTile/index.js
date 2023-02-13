import {
  BasicInfo,
  MovieData,
  MovieTileWrapper,
  MovieTitle,
  NoVotes,
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
import star from "../../../../images/star.svg";
import { formatDate } from "../../../utilities";
import { APIImageUrl } from "../../../dataAPI";

const MovieTile = ({
  title,
  releaseYear,
  releaseDate,
  productionCountries,
  overview,
  voteAverage,
  voteCount,
  poster,
  tags,
}) => {
  return (
    <>
      <MovieTileWrapper>
        {poster && <Poster src={`${APIImageUrl}/w500${poster}`} />}
        <MovieData>
          <MovieTitle>{title}</MovieTitle>
          <ReleaseYear>{releaseYear.slice(0, 4)}</ReleaseYear>
          {productionCountries.length !== 0 && (
            <BasicInfo>
              <Production>Production:</Production>
              <ProductionCountries>
                {productionCountries.map((country) => country.name).join(", ")}
              </ProductionCountries>
            </BasicInfo>
          )}
          {releaseDate && (
            <BasicInfo>
              <Production>Release:</Production>
              <ProductionCountries>
                {formatDate(releaseDate, "dd.MM.yyyy")}
              </ProductionCountries>
            </BasicInfo>
          )}
          <Tags>
            {tags.map((tag, index) => (
              <TagButton key={index}>
                <Tag>{tag.name}</Tag>
              </TagButton>
            ))}
          </Tags>
          <Rating>
            {voteCount ? (
              <>
                <Star src={star} /> <Rate>{voteAverage.toFixed(1)}</Rate>
                <Votes>/ 10</Votes> <Votes>{voteCount} votes</Votes>
              </>
            ) : (
              <NoVotes>No votes yet</NoVotes>
            )}
          </Rating>
        </MovieData>
        <Summary>{overview}</Summary>
      </MovieTileWrapper>
    </>
  );
};

export default MovieTile;
