import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import { Layout } from "./styled";

const MoviesListPage = () => {
  return (
    <>
      <Container>
        <PageHeader title="Popular movies" />
        <Layout>
          <PopularMoviesTile />
          <PopularMoviesTile />
          <PopularMoviesTile />
          <PopularMoviesTile />
          <PopularMoviesTile />
          <PopularMoviesTile />
          <PopularMoviesTile />
          <PopularMoviesTile />
        </Layout>
        <Pagination />
      </Container>
    </>
  );
};

export default MoviesListPage;
