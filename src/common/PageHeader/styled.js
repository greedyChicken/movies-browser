import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 56px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 24px 0 0;
    font-size: 20px;
    line-height: 1.2;
  }
`;
