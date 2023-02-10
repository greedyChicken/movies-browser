import styled from "styled-components";

export const PeopleContainer = styled.div`
  margin: 0px 0px 56px 0px;
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
    margin: 0px 0px 21px 0px;
    grid-template-columns: 1fr 1fr;
  }
`;

// /*
//  max-width: 1368px;
//   margin: 24px auto 40px;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, 208px);
//   gap: 24px;
//   justify-content: center;

//   @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
//     grid-template-columns: 1fr 1fr;
//     gap: 16px; */
//   }
// `;
