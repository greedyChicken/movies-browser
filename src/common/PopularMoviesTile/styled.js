import styled from "styled-components";
import { borderRadius, boxShadow } from "../../theme";
import { ReactComponent as NoPoster } from "../../images/no-poster-image.svg";

export const TileContainer = styled.div`
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: auto 1fr;
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
  height: auto;
  width: 100%;
  padding: 16px;
  border-radius: ${borderRadius};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: grid;
    grid-template-columns: auto 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 136px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 16px;
  }
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.extraLarge}px) {
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-gap: 4px;
    margin-bottom: 8px;
  }
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 16px;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 22px;
  }

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
  margin: 0 16px;
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
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  gap: 8px;
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0 16px 0 0;
  }
`;

export const TagButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 36px;
  border: none;
  padding: 8px 16px;
  background: ${({ theme }) => theme.color.mystic};
  border-radius: ${borderRadius};

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

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 10px;
    line-height: 1.1;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 0;
  }
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Votes = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
