import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import PageHeader from "../../../common/PageHeader";
import { PopularMoviesTile } from "../../../common/PopularMoviesTile";
import { Layout } from "./styled";

const MoviesListPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PageHeader title="Popular Movies" />
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
