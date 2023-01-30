import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1368px;
  margin: 24px auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 208px);
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;
