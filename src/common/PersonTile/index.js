import {
  PersonDetails,
  PersonFunction,
  PersonName,
  PersonPhoto,
  TileContainer,
} from "./styled";
import profilePhoto from "../../images/person.png";

export const PersonTile = () => {
  return (
    <TileContainer>
      <PersonPhoto src={profilePhoto} alt="Person Photo"></PersonPhoto>
      <PersonDetails>
        <PersonName>Liu Yifei</PersonName>
        <PersonFunction>Mulan</PersonFunction>
      </PersonDetails>
    </TileContainer>
  );
};
