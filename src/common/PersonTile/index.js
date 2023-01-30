import {
  PersonDetails,
  PersonFunction,
  PersonName,
  PersonPhoto,
  TileContainer,
} from "./styled";

export const PersonTile = ({ poster, fullName }) => {
  return (
    <TileContainer>
      <PersonPhoto src={poster} alt="Person Photo"></PersonPhoto>
      <PersonDetails>
        <PersonName>{fullName}</PersonName>
        <PersonFunction>{""}</PersonFunction>
      </PersonDetails>
    </TileContainer>
  );
};
