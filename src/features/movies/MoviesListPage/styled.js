import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1368px;
  margin: 24px auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 324px);
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;
  }
`;
