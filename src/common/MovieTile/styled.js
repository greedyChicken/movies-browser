import styled from "styled-components";
import { boxShadow } from "../../theme";

export const MovieTileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 40px 0;
  gap: 40px;
  max-width: 1368px;
  height: 544px;

  background: ${({ theme }) => theme.color.white};

  box-shadow: ${boxShadow};
`;
