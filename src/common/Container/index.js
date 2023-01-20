import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 90%;
  }
`;
