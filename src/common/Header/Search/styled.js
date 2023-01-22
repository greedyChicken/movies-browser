import styled from "styled-components";
import { ReactComponent as Search } from "../../../images/search.svg";

export const SearchBar = styled.div`
  max-width: 432px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}px) {
    max-width: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: auto;
    line-height: 16px;
  }
`;

export const SearchIcon = styled(Search)`
  margin: 12px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 18px;
    height: 18px;
  }
`;

export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.waterloo};
  background-color: transparent;
  font-size: 16px;
  padding: 12px 0 12px;
  border-style: none;
  width: 100%;
  line-height: 1.5;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 15px;
  }
`;
