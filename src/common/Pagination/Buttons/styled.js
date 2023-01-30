import styled, { css } from "styled-components";
import { borderRadius } from "../../../theme";

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

  ${(props) =>
    props.backward &&
    css`
      background-color: ${({ theme }) => theme.color.mystic};
    `}

  ${(props) =>
    props.forward &&
    css`
      background-color: ${({ theme }) => theme.color.pattensBlue};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    gap: 4px;
    font-size: 10px;
    padding: 8px 12px;
  }
`;

export const ButtonText = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: none;
  }
`;

export const Wrapper = styled.span`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    display: flex;
  }
`;
