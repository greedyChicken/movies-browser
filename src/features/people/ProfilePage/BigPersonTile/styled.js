import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../../theme";

export const PersonTileWrapper = styled.div`
  margin: 56px 0;
  padding: 40px;
  display: grid;
  gap: 0 40px;
  grid-template-columns: minmax(auto, 312px) 1fr;
  box-shadow: ${boxShadow};
  background: ${({ theme }) => theme.color.white};
  grid-template-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    gap: 0 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
    padding: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    gap: 0 16px;
    padding: 16px;
  }
`;

export const Poster = styled.img`
  width: 312px;
  height: 464px;
  border-radius: ${borderRadius};
  grid-row: span 2;
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: 215px;
    height: 319px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 114px;
    height: 169px;
  }
`;

export const PersonData = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    grid-row: span 2;
  }
`;

export const PersonName = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 0 0 24px 0;
  word-break: break-word;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 24px;
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    margin: 0 0 8px 0;
  }
`;

export const BasicInfo = styled.div`
  margin: 0px 0px 8px 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const Birth = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormgrey};
  margin: 0px 10px 0px 0px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 12px;
    margin: 0px 4px 0px 0px;
  }
`;

export const BirthDetails = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  line-height: 120%;
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 12px;
  }
`;

export const Biography = styled.article`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 17px;
    grid-row: 3;
    grid-column: span 2;
    margin-top: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 14px;
    margin-top: 4px;
  }
`;
