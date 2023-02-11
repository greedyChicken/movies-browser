import styled from "styled-components";
import { borderRadius, boxShadow } from "../../../../theme";

export const MovieTileWrapper = styled.div`
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

export const MovieData = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    grid-row: span 2;
  }
`;

export const MovieTitle = styled.h1`
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

export const ReleaseYear = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 16px;
    line-height: 1.3;
    margin-top: -16px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    margin-top: 0;
    margin-bottom: 8px;
  }
  }
`;

export const BasicInfo = styled.div`
  margin: 0px 0px 8px 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const Production = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormgrey};
  margin: 0px 10px 0px 0px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: none;
  }
`;

export const ProductionCountries = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.color.black};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 12px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }
`;

export const TagButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  border: none;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: ${borderRadius};
  order: 2;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 4px 8px;
    gap: 8px;
    height: 19px;
  }
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.woodsmoke};
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 0 0 4px 0;
  }
`;

export const Star = styled.img`
  width: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 13px;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  flex: none;
  order: 2;
  flex-grow: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
  }
`;

export const Summary = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
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
