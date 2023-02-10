import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { NoResultsImage, Wrapper } from "./styled";

const NoResultsPage = ({ query }) => {
  return (
    <Container>
      <PageHeader title={`Sorry, there are no results for "${query}"`} />
      <Wrapper>
        <NoResultsImage />
      </Wrapper>
    </Container>
  );
};

export default NoResultsPage;
