import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../../theme";

export const PersonTileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 56px 0;
  padding: 16px;
  word-break: break-word;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 23px 0;
    padding: 8px;
  }
`;

export const Poster = styled.img`
  width: 312px;
  margin: 40px;
  border-radius: ${borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 114px;
    margin: 16px;
  }
`;

export const PersonData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px;
  margin-right: 40px;
  width: 936px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 4px 0px;
    gap: 16px;
    margin-right: 16px;
  }
`;

export const PersonName = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
    line-height: 1.3;
    margin-bottom: 16px;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: -14px 0;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    line-height: 1.2;
    gap: 4px;
  }
`;

export const Birth = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.stormgrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    line-height: 1.2;
  }
`;

export const BirthDetails = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    line-height: 1.2;
  }
`;

export const Biography = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
    line-height: 1.3;
    margin-top: 96px;
    margin-left: -130px;
    margin-right: 12px;
  }
`;

export const AboutBirth = styled.div`
  flex: none;
  order: 1;
`;
