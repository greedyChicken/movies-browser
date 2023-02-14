import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1368px;
  margin: 24px auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: 1fr;
    margin: 12px auto 0;
    margin-bottom: 30px;
  }
`;
