import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
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
      </Container>
    </>
  );
};

export default MoviesListPage;
