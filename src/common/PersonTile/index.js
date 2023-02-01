import {
  NoProfileImage,
  NoProfileImageIcon,
  PersonDetails,
  PersonFunction,
  PersonName,
  PersonPhoto,
  TileContainer,
} from "./styled";

export const PersonTile = ({ profile, profilePath, fullName }) => {
  return (
    <TileContainer>
      {profilePath ? (
        <PersonPhoto src={profile} alt="Person Photo"></PersonPhoto>
      ) : (
        <NoProfileImage>
          <NoProfileImageIcon />
        </NoProfileImage>
      )}
      <PersonDetails>
        <PersonName>{fullName}</PersonName>
        <PersonFunction>{""}</PersonFunction>
      </PersonDetails>
    </TileContainer>
  );
};
