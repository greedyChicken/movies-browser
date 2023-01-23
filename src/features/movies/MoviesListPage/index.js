import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import PageHeader from "../../../common/PageHeader";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";

const MoviesListPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PageHeader title="Popular Movies" />
        <PopularMoviesTile />
      </Container>
    </>
  );
};

export default MoviesListPage;
