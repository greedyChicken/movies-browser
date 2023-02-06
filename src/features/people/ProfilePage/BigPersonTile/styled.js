import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../../theme";

export const PersonTileWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 40px 0;
  max-width: 1368px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 16px;
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
  margin: 0;
  width: 936px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 4px 0px;
    gap: 16px;
  }
`;

export const PersonName = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: -16px 0;
  gap: 11px;
`;

export const Birth = styled.p`
  font-style: normal;
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
    margin-right: 10px;
  }
`;

export const AboutBirth = styled.div`
  flex: none;
  order: 1;
`;
