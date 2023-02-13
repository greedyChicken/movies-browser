import { APIImageUrl } from "../../features/dataAPI";
import {
  NoProfileImage,
  NoProfileImageIcon,
  PersonDetails,
  PersonFunction,
  PersonName,
  PersonPhoto,
  TileContainer,
} from "./styled";

export const PersonTile = ({ profile, fullName, role }) => {
  return (
    <TileContainer>
      {profile ? (
        <PersonPhoto
          src={`${APIImageUrl}/w185${profile}`}
          alt="Person Photo"
        ></PersonPhoto>
      ) : (
        <NoProfileImage>
          <NoProfileImageIcon />
        </NoProfileImage>
      )}
      <PersonDetails>
        <PersonName>{fullName}</PersonName>
        <PersonFunction>{role}</PersonFunction>
      </PersonDetails>
    </TileContainer>
  );
};
