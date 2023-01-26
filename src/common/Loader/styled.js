import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Spinner = styled.div`
  margin: 0 auto;
  width: 91px;
  height: 91px;
  border: 11px solid ${({ theme }) => theme.color.snuff};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.color.black};
  animation: spin 1.2s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    height: 35px;
    width: 35px;
    border-width: 4px;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
