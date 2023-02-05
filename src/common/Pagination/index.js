import { PageNumber, Pages, StyledPagination } from "./styled";
import { Button, ButtonText, StyledButtons, Wrapper } from "./styled";
import { BackwardArrow, ForwardArrow } from "./buttonArrows";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchSearchResults,
  selectLastPage,
  selectPage,
} from "../../features/movies/MoviesListPage/moviesSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

const Pagination = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectPage);
  const lastPageNumber = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);

  const changePage = (currentPage, backward, toEnd, query) => {
    const fetchFunction =
      query && query !== "" ? fetchSearchResults : fetchMovies;

    if (toEnd) {
      backward
        ? currentPage !== 1 && dispatch(fetchFunction({ query, pageNumber: 1 }))
        : currentPage !== lastPageNumber &&
          dispatch(fetchFunction({ query, pageNumber: lastPageNumber }));
    } else {
      backward
        ? currentPage > 1 &&
          dispatch(fetchFunction({ query, pageNumber: currentPage - 1 }))
        : currentPage < lastPageNumber &&
          dispatch(fetchFunction({ query, pageNumber: currentPage + 1 }));
    }
  };

  return (
    <StyledPagination>
      <StyledButtons>
        <Button
          backward
          onClick={() => changePage(pageNumber, true, true, query)}
        >
          <BackwardArrow />
          <ButtonText>First</ButtonText>
          <Wrapper>
            <BackwardArrow />
          </Wrapper>
        </Button>

        <Button
          backward
          onClick={() => changePage(pageNumber, true, false, query)}
        >
          <BackwardArrow />
          <ButtonText>Previous</ButtonText>
        </Button>
      </StyledButtons>
      <Pages>
        Page
        <PageNumber>{pageNumber}</PageNumber>
        of
        <PageNumber>{lastPageNumber}</PageNumber>
      </Pages>
      <StyledButtons>
        <Button
          forward
          onClick={() => changePage(pageNumber, false, false, query)}
        >
          <ButtonText>Next</ButtonText>
          <ForwardArrow />
        </Button>

        <Button
          forward
          onClick={() => changePage(pageNumber, false, true, query)}
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
