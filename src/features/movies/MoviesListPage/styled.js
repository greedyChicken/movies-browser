import styled from "styled-components";

export const Layout = styled.div`
  margin: 24px auto 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.bigest}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: max(24px, calc((100% - (3 * 380px)) / 2));
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: max(24px, calc(100% - (2 * 400px)));
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: 1fr;
    margin: 12px auto 0;
  }
`;
