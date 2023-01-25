import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Camera } from "../../images/camera.svg";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.color.woodsmoke};
  position: sticky;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    flex-direction: column;
    padding: 32px 16px 16px 16px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    grid-gap: 0px;
    margin-bottom: 32px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  white-space: nowrap;
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 13px;
    letter-spacing: 0.5px;
  }
`;

export const LogoIcon = styled(Camera)`
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 20px;
    height: 20px;
  }
`;

export const LogoTitle = styled.p`
  margin: 0px 24px 0 16px;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li`
  cursor: pointer;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 14px 24px;

  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
