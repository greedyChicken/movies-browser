import { Button, PageNumber, Pages, StyledPagination } from "./styled";
import { ButtonText, StyledButtons, Wrapper } from "./styled";
import { BackwardArrow, ForwardArrow } from "./paginationUtils/buttonArrows";
import { useReplaceQueryParameter } from "../queryParameters";
import { pageQueryParamName } from "../queryParamNames";

const Pagination = ({ currentPage, lastPage }) => {
  const page = parseInt(currentPage);
  const backButtonsDisabled = page === 1;
  const forwardButtonsDisabled = page === lastPage;
  const replaceQueryParameter = useReplaceQueryParameter();

  const setPage = (destinationPage) => {
    replaceQueryParameter([
      {
        key: pageQueryParamName,
        value: destinationPage,
      },
    ]);
  };

  return (
    <StyledPagination>
      <StyledButtons>
        <Button onClick={() => setPage(1)} disabled={backButtonsDisabled}>
          <BackwardArrow disabled={backButtonsDisabled} />
          <ButtonText>First</ButtonText>
          <Wrapper>
            <BackwardArrow disabled={backButtonsDisabled} />
          </Wrapper>
        </Button>

        <Button
          onClick={() => setPage(page - 1)}
          disabled={backButtonsDisabled}
        >
          <BackwardArrow disabled={backButtonsDisabled} />
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
          onClick={() => setPage(page + 1)}
          disabled={forwardButtonsDisabled}
        >
          <ButtonText>Next</ButtonText>
          <ForwardArrow disabled={forwardButtonsDisabled} />
        </Button>

        <Button
          onClick={() => setPage(lastPage)}
          disabled={forwardButtonsDisabled}
        >
          <ButtonText>Last</ButtonText>
          <Wrapper>
            <ForwardArrow disabled={forwardButtonsDisabled} />
          </Wrapper>
          <ForwardArrow disabled={forwardButtonsDisabled} />
        </Button>
      </StyledButtons>
    </StyledPagination>
  );
};

export default Pagination;
