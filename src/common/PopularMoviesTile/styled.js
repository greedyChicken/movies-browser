import styled from "styled-components";
import { borderRadius, boxShadow } from "../../theme";
import { ReactComponent as NoPoster } from "../../images/no-poster-image.svg";

export const TileContainer = styled.div`
  max-width: 324px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
    width: 288px;
  }
`;

export const NoMovieImage = styled.div`
  height: 434px;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: ${borderRadius};
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    min-width: 180px;
    height: 270px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    min-width: 114px;
    height: 169px;
  }
`;

export const NoMovieImageIcon = styled(NoPoster)`
  height: 96px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 72px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 48px;
  }
`;

export const Poster = styled.img`
  height: 434px;
  margin: 16px;
  border-radius: ${borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 169px;
    left: calc(50% - 114px / 2 - 71px);
    top: 0px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.woodsmoke};
  align-self: left;
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 16px;
    line-height: 1.3;
    margin: 16px 0 0 0;
  }
`;

export const Release = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin: 8px 16px;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 1.3;
    margin: 0;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    gap: 8px;
  }
`;

export const TagButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 36px;
  border: none;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: ${borderRadius};
  order: 2;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
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

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
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
  margin: 16px;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0;
  }
`;

export const Star = styled.img`
  width: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.woodsmoke};
  flex: none;
  order: 1;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Votes = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.waterloo};
  flex: none;
  order: 2;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
