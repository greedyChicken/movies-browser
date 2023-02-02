import { Container } from "../Container";
import PageHeader from "../PageHeader";
import { NoResultsImage, Wrapper } from "./styled";

const NoResultsPage = () => {
  return (
    <Container>
      <PageHeader title={"Sorry, there are no results for “Muan”"} />
      <Wrapper>
        <NoResultsImage />
      </Wrapper>
    </Container>
  );
};

export default NoResultsPage;
