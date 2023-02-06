import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
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

export const Rating = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 4px;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin-bottom: 10px;
  }
`;

export const Star = styled.img`
  width: 40px;
  margin-right: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 14px;
  }
`;

export const Rate = styled.span`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    line-height: 1;
    font-size: 22px;
    margin-right: 16px;
    margin-bottom: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin-bottom: 8px;
    font-size: 14px;
    margin-right: 8px;
  }
`;

export const Votes = styled.span`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1%;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-bottom: 0;
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 10px;
  }
`;
