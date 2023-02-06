import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};

  /* 
  gap: 40px;
  background: ;
  margin: 0 auto; */
`;

export const BackdropContainer = styled.div`
  max-width: 1368px;
  position: relative;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 0 10%;
  }
`;

export const Backdrop = styled.img`
  display: block;
  width: 100%;
`;

export const Poster = styled.img`
  height: 769px;
  display: block;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    height: 316px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 169px;
  }
`;

export const Pleksa = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.color.lineargradient};
  background-position: center;
  background-size: 140%;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: bottom;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2;
  margin-bottom: 24px;
  color: inherit;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 32px;
    margin-bottom: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 20px;
  }
`;
