import styled from "styled-components";
import { borderRadius } from "../../theme";
import { ReactComponent as NoProfile } from "../../images/no-profile-image.svg";

export const TileContainer = styled.div`
  max-width: 208px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  text-align: center;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.woodsmoke};
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 8px;
  }
`;

export const NoProfileImage = styled.div`
  height: 264px;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: ${borderRadius};
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 178px;
  }
`;

export const NoProfileImageIcon = styled(NoProfile)`
  height: 72px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 48px;
  }
`;

export const PersonPhoto = styled.img`
  height: 264px;
  border-radius: ${borderRadius};
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 178px;
  }
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonName = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 12px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 14px;
  }
`;

export const PersonFunction = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 8px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
  }
`;
