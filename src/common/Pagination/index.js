import { Button, PageNumber, Pages, StyledPagination } from "./styled";
import { ButtonText, StyledButtons, Wrapper } from "./styled";
import { BackwardArrow, ForwardArrow } from "./paginationUtils/buttonArrows";
import {
  getFirstPage,
  getLastPage,
  getNextPage,
  getPreviousPage,
} from "./paginationUtils/pathFunctions";

const Pagination = ({ currentPage, lastPage, type, searchParam }) => {
  const backButtonsDisabled = parseInt(currentPage) === 1;
  const forwardButtonsDisabled = parseInt(currentPage) === lastPage;

  return (
    <StyledPagination>
      <StyledButtons>
        <Button
          to={getFirstPage(type, searchParam)}
          disabled={backButtonsDisabled}
        >
          <BackwardArrow />
          <ButtonText>First</ButtonText>
          <Wrapper>
            <BackwardArrow />
          </Wrapper>
        </Button>

        <Button
          to={getPreviousPage(type, currentPage, searchParam)}
          disabled={backButtonsDisabled}
        >
          <BackwardArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </StyledButtons>
      <Pages>
        Page
        <PageNumber>{currentPage}</PageNumber>
        of
        <PageNumber>{lastPage}</PageNumber>
      </Pages>
      <StyledButtons>
        <Button
          to={getNextPage(type, currentPage, lastPage, searchParam)}
          disabled={forwardButtonsDisabled}
        >
          <ButtonText>Next</ButtonText>
          <ForwardArrow />
        </Button>

        <Button
          to={getLastPage(type, lastPage, searchParam)}
          disabled={forwardButtonsDisabled}
        >
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
