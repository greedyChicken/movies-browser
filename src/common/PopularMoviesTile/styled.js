import styled from "styled-components";
import { borderRadius, boxShadow } from "../../theme";

export const TileContainer = styled.div`
  max-width: 324px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${boxShadow};
  border-radius: ${borderRadius};

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  margin: 16px;

  border-radius: ${borderRadius};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
`;

export const MovieTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  margin: 0 16px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.color.woodsmoke};

  flex: none;
  order: 0;
  align-self: left;
  flex-grow: 0;
`;

export const Release = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  margin: 8px 16px;

  color: ${({ theme }) => theme.color.waterloo};

  flex: none;
  order: 0;
  align-self: flex-start;
  flex-grow: 0;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  margin: 0 16px;
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

  flex: none;
  order: 2;
  flex-grow: 0;
`;

export const Tag = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.woodsmoke};

  display: flex;
  align-items: center;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  margin: 16px;
`;

export const Star = styled.img`
  width: 24px;
  height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
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
`;
