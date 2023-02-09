import { formatDate } from "../../../utilities";
import {
  BasicInfo,
  PersonData,
  PersonTileWrapper,
  PersonName,
  Poster,
  Birth,
  BirthDetails,
  Biography,
  BiographyMobile,
} from "./styled";

const BigPersonTile = ({ name, birthday, birthplace, biography, poster }) => {
  return (
    <>
      <PersonTileWrapper>
        <Poster src={poster} />
        <PersonData>
          <PersonName>{name}</PersonName>
          <BasicInfo>
            <Birth>Date of birth: </Birth>{" "}
            <BirthDetails>{formatDate(birthday, "dd.MM.yyyy")} </BirthDetails>
          </BasicInfo>
          <BasicInfo>
            <Birth>Place of birth: </Birth>{" "}
            <BirthDetails>{birthplace}</BirthDetails>
          </BasicInfo>
        </PersonData>{" "}
        <Biography>{biography}</Biography>
      </PersonTileWrapper>
    </>
  );
};

export default BigPersonTile;
