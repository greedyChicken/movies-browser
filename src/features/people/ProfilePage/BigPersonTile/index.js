import { APIImageUrl } from "../../../dataAPI";
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
} from "./styled";

const BigPersonTile = ({ name, birthday, birthplace, biography, poster }) => {
  return (
    <PersonTileWrapper>
      {poster && <Poster src={`${APIImageUrl}/h632${poster}`} />}
      <PersonData>
        <PersonName>{name}</PersonName>
        {birthday && (
          <BasicInfo>
            <Birth>Date of birth: </Birth>
            <BirthDetails>{formatDate(birthday, "dd.MM.yyyy")} </BirthDetails>
          </BasicInfo>
        )}
        {birthplace && (
          <BasicInfo>
            <Birth>Place of birth: </Birth>
            <BirthDetails>{birthplace}</BirthDetails>
          </BasicInfo>
        )}
      </PersonData>
      {biography && <Biography>{biography}</Biography>}
    </PersonTileWrapper>
  );
};

export default BigPersonTile;
