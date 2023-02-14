import styled from "styled-components";
import { borderRadius } from "../../core/theme";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 40px 0 103px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 32px 0 31px;
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

export const StyledButtons = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  border-radius: ${borderRadius};
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.color.woodsmoke};
  background-color: ${({ theme }) => theme.color.pattensBlue};
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  &:active {
    transform: scale(1.05);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    gap: 4px;
    font-size: 10px;
    padding: 8px 12px;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: none;
  }
`;

export const Wrapper = styled.span`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    display: flex;
  }
`;
