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

const BigPersonTile = ({ tag }) => {
  return (
    <>
      <PersonTileWrapper>
        <Poster src={poster} />
        <PersonData>
          <PersonName>Liu Yifei</PersonName>

          <BasicInfo>
            <Birth>Date of birth: </Birth>{" "}
            <BirthDetails>25.08.1987 </BirthDetails>
          </BasicInfo>
          <BasicInfo>
            <Birth>Place of birth: </Birth>{" "}
            <BirthDetails>Wuhan, Hubei, China</BirthDetails>
          </BasicInfo>
          <Biography>
            Liu Yifei was born in Wuhan, Hubei, Province of China on August
            25th, 1987. She began modeling at the age of 8 and was trained in
            singing, dancing and the piano. Moving to the United States at 10
            with her mother, Liu lived there for four years.
          </Biography>
        </PersonData>
      </PersonTileWrapper>
    </>
  );
};

export default BigPersonTile;
