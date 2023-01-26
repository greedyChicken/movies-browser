import styled from "styled-components";

export const BigMovieTileWrapper = styled.div`
  height: 769px;
  gap: 40px;
  background: ${({ theme }) => theme.color.black};
`;

export const Poster = styled.img`
  max-width: 1368px;
  display: block;
  margin: 0 auto;
`;
