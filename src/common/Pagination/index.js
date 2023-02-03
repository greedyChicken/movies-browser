import { PageNumber, Pages, StyledPagination } from "./styled";
import { Button, ButtonText, StyledButtons, Wrapper } from "./styled";
import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectPage,
} from "../../features/movies/MoviesListPage/moviesSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPage);

  const changePage = (currentPage, backward, toEnd) => {
    if (toEnd) {
      backward
        ? currentPage !== 1 && dispatch(fetchMovies(1))
        : currentPage !== 500 && dispatch(fetchMovies(500));
    } else {
      backward
        ? currentPage > 1 && dispatch(fetchMovies(currentPage - 1))
        : currentPage < 500 && dispatch(fetchMovies(currentPage + 1));
    }
  };

  return (
    <StyledPagination>
      <StyledButtons>
        <Button backward onClick={() => changePage(pageNumber, true, true)}>
          <BackwardArrow />
          <ButtonText>First</ButtonText>
          <Wrapper>
            <BackwardArrow />
          </Wrapper>
        </Button>

        <Button backward onClick={() => changePage(pageNumber, true, false)}>
          <BackwardArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </StyledButtons>
      <Pages>
        Page
        <PageNumber>{pageNumber}</PageNumber>
        of
        <PageNumber>500</PageNumber>
      </Pages>
      <StyledButtons>
        <Button forward onClick={() => changePage(pageNumber, false, false)}>
          <ButtonText>Next</ButtonText>
          <ForwardArrow />
        </Button>

        <Button forward onClick={() => changePage(pageNumber, false, true)}>
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
