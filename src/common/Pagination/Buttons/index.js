import React from "react";
import { BackwardArrow, ForwardArrow } from "../buttonArrows";
import { Button, ButtonText, StyledButtons, Wrapper } from "./styled";

const Buttons = ({ backward }) => {
  return (
    <StyledButtons>
      {backward ? (
        <>
          <Button backward>
            <BackwardArrow />
            <ButtonText>First</ButtonText>
            <Wrapper>
              <BackwardArrow />
            </Wrapper>
          </Button>

          <Button backward>
            <BackwardArrow />
            <ButtonText>Previous</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <Button forward>
            <ButtonText>Next</ButtonText>
            <ForwardArrow />
          </Button>

          <Button forward>
            <ButtonText>Last</ButtonText>
            <Wrapper>
              <ForwardArrow />
            </Wrapper>
            <ForwardArrow />
          </Button>
        </>
      )}
    </StyledButtons>
  );
};

export default Buttons;
