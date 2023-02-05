import {
  BasicInfo,
  PersonData,
  PersonTileWrapper,
  PersonName,
  Poster,
  Birth,
  BirthDetails,
  Biography,
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
            <BirthDetails>{birthday} </BirthDetails>
          </BasicInfo>
          <BasicInfo>
            <Birth>Place of birth: </Birth>{" "}
            <BirthDetails>{birthplace}</BirthDetails>
          </BasicInfo>
          <Biography>{biography}</Biography>
        </PersonData>
      </PersonTileWrapper>
    </>
  );
};

export default BigPersonTile;
