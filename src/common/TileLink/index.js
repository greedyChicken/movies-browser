import { Link } from "react-router-dom";
import styled from "styled-components";

export const TileLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 100%;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  &:active {
    transform: scale(1.05);
  }
`;
