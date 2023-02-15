import { APIImageUrl } from "../../features/dataAPI";
import {
  PersonDetails,
  PersonFunction,
  PersonName,
  PersonPhoto,
  PersonPhotoWrapper,
  TileContainer,
} from "./styled";

export const PersonTile = ({ profile, fullName, role }) => {
  return (
    <TileContainer>
      <PersonPhotoWrapper>
        {profile ? (
          <PersonPhoto
            src={`${APIImageUrl}/w185${profile}`}
            alt="Person Photo"
          ></PersonPhoto>
        ) : (
          <PersonPhoto></PersonPhoto>
        )}
      </PersonPhotoWrapper>
      <PersonDetails>
        <PersonName>{fullName}</PersonName>
        <PersonFunction>{role}</PersonFunction>
      </PersonDetails>
    </TileContainer>
  );
};
