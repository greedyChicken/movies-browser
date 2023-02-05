import {
  LeftButton,
  PageNumber,
  Pages,
  RightButton,
  StyledPagination,
} from "./styled";
import { ButtonText, StyledButtons, Wrapper } from "./styled";
import { BackwardArrow, ForwardArrow } from "./paginationUtils/buttonArrows";
import {
  getFirstPage,
  getLastPage,
  getNextPage,
  getPreviousPage,
} from "./paginationUtils/pathFunctions";

const Pagination = ({ currentPage, lastPage, type }) => {
  return (
    <StyledPagination>
      <StyledButtons>
        <LeftButton to={getFirstPage(type)}>
          <BackwardArrow />
          <ButtonText>First</ButtonText>
          <Wrapper>
            <BackwardArrow />
          </Wrapper>
        </LeftButton>

        <LeftButton to={getPreviousPage(type, currentPage)}>
          <BackwardArrow />
          <ButtonText>Previous</ButtonText>
        </LeftButton>
      </StyledButtons>
      <Pages>
        Page
        <PageNumber>{currentPage}</PageNumber>
        of
        <PageNumber>{lastPage}</PageNumber>
      </Pages>
      <StyledButtons>
        <RightButton to={getNextPage(type, currentPage, lastPage)}>
          <ButtonText>Next</ButtonText>
          <ForwardArrow />
        </RightButton>

        <RightButton to={getLastPage(type, lastPage)}>
          <ButtonText>Last</ButtonText>
          <Wrapper>
            <ForwardArrow />
          </Wrapper>
          <ForwardArrow />
        </RightButton>
      </StyledButtons>
    </StyledPagination>
  );
};

export default Pagination;
