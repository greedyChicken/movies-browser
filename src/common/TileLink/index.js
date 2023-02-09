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
    }
    &:active {
        transform: scale(1.05);
    }
`;
