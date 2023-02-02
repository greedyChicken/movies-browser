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
import poster from "../../images/bigperson.png";

const BigPersonTile = ({ personname, datebirth, placebirth, biography }) => {
  return (
    <>
      <PersonTileWrapper>
        <Poster src={poster} />
        <PersonData>
          <PersonName>{personname}</PersonName>

          <BasicInfo>
            <Birth>Date of birth: </Birth>{" "}
            <BirthDetails>{datebirth} </BirthDetails>
          </BasicInfo>
          <BasicInfo>
            <Birth>Place of birth: </Birth>{" "}
            <BirthDetails>{placebirth}</BirthDetails>
          </BasicInfo>
          <Biography>{biography}</Biography>
        </PersonData>
      </PersonTileWrapper>
    </>
  );
};

export default BigPersonTile;
