import styled from "styled-components";

export const BigMovieTileWrapper = styled.div`
  gap: 40px;
  background: ${({ theme }) => theme.color.black};
  margin: 0 auto;
`;

export const Poster = styled.img`
  height: 769px;
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 316px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 169px;
  }
`;
