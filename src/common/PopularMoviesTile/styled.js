import styled from "styled-components";
import { borderRadius, boxShadow } from "../../theme";

export const TileContainer = styled.div`
  max-width: 324px;
  height: 650px;
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
  align-self: center;
  flex-grow: 0;
`;

export const Release = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.color.waterloo};

  flex: none;
  order: 1;
  align-self: flex-start;
  flex-grow: 0;
`;
