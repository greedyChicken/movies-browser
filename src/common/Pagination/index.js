import { PageNumber, Pages, StyledPagination } from "./styled";
import { Button, ButtonText, StyledButtons, Wrapper } from "./styled";
import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { useDispatch } from "react-redux";

const Pagination = ({ fetchFunction, currentPage, lastPage }) => {
  const dispatch = useDispatch();

  const changePage = (page, backward, toEnd) => {
    if (toEnd) {
      backward
        ? page !== 1 && dispatch(fetchFunction(1))
        : page !== 500 && dispatch(fetchFunction(500));
    } else {
      backward
        ? page > 1 && dispatch(fetchFunction(page - 1))
        : page < 500 && dispatch(fetchFunction(page + 1));
    }
  };

  return (
    <StyledPagination>
      <StyledButtons>
        <Button backward onClick={() => changePage(currentPage, true, true)}>
          <BackwardArrow />
          <ButtonText>First</ButtonText>
          <Wrapper>
            <BackwardArrow />
          </Wrapper>
        </Button>

        <Button backward onClick={() => changePage(currentPage, true, false)}>
          <BackwardArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </StyledButtons>
      <Pages>
        Page
        <PageNumber>{currentPage}</PageNumber>
        of
        <PageNumber>500</PageNumber>
      </Pages>
      <StyledButtons>
        <Button forward onClick={() => changePage(currentPage, false, false)}>
          <ButtonText>Next</ButtonText>
          <ForwardArrow />
        </Button>

        <Button forward onClick={() => changePage(currentPage, false, true)}>
          <ButtonText>Last</ButtonText>
          <Wrapper>
            <ForwardArrow />
          </Wrapper>
          <ForwardArrow />
        </Button>
      </StyledButtons>
    </StyledPagination>
  );
};

export default Pagination;
