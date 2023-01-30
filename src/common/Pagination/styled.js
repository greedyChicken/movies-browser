import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 40px 0 103px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 0 0 31px;
    gap: 8px;
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    gap: 2px;
    font-size: 10px;
  }
`;

export const PageNumber = styled.span`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
`;
