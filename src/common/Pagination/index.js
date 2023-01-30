import React from "react";
import { PageNumber, Pages, StyledPagination } from "./styled";
import Buttons from "./Buttons";

const Pagination = () => {
  return (
    <StyledPagination>
      <Buttons backward={true} />
      <Pages>
        Page
        <PageNumber>1</PageNumber>
        of
        <PageNumber>500</PageNumber>
      </Pages>
      <Buttons backward={false} />
    </StyledPagination>
  );
};

export default Pagination;
