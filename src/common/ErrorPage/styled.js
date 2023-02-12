import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Error } from "../../images/error.svg";
import { borderRadius } from "../../core/theme";

export const Wrapper = styled.div`
  margin-top: 180px;
  text-align: center;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    margin-top: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin-top: 50px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 100px;
  height: 100px;
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    width: 90px;
    height: 90px;
    margin: 0 0 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 40px;
    height: 40px;
    margin: 0 0 12px;
  }
`;

export const ErrorText = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 16px;
  }
`;

export const ButtonLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  padding: 16px 24px;
  border-radius: ${borderRadius};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    font-size: 12px;
    padding: 12px 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
