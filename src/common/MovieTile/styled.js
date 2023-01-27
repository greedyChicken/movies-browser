import styled from "styled-components";
import { borderRadius, boxShadow } from "../../theme";

export const MovieTileWrapper = styled.div`
  display: flex;
  flex-direction: row;
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

export const MovieData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px;
  margin: 0;
  width: 936px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 0px;
    gap: 8px;
    width: 126px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const MovieTitle = styled.h1`
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

export const ReleaseYear = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
    line-height: 1.3;
    margin-top: -16px;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 126px;
  }
`;

export const Production = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: ${({ theme }) => theme.color.stormgrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: none;
  }
`;

export const ProductionCountries = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin: 0;

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
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-top: -16px;
  }
`;

export const Star = styled.img`
  width: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 16px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
    line-height: 1.3;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Summary = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.color.black};
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
    line-height: 1.3;
    margin: 0 16px;
    width: 100%;
    order: 2;
  }
`;
