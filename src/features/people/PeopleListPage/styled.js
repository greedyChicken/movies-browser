import styled from "styled-components";

export const PeopleContainer = styled.div`
  margin: 24px 0px 56px 0px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.extraLarge}px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 12px 0px 21px 0px;
    grid-template-columns: 1fr 1fr;
  }
`;
