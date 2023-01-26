import styled from "styled-components";
import { boxShadow } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 40px;
  gap: 40px;

  max-width: 1368px;
  height: 544px;

  background: ${({ theme }) => theme.color.white};

  box-shadow: ${boxShadow};
`;
