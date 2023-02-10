import styled from "styled-components";

export const Layout = styled.div`
  margin: 24px auto 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 16px;
    margin: 12px auto 32px;
  }
`;
