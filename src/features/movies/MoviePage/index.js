import BigMovieTile from "../../../common/BigMovieTile";
import { Container } from "../../../common/Container";
import { Layout } from "../../../common/Layout/styled";
import MovieTile from "../../../common/MovieTile";
import PageHeader from "../../../common/PageHeader";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "./styled";

const MoviePage = () => {
  return (
    <>
      <BigMovieTile />
      <Container>
        <MovieTile />
        <Wrapper>
          <PageHeader title="Cast" />
          <Layout>
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
          </Layout>
        </Wrapper>
        <Wrapper>
          <PageHeader title="Crew" />
          <Layout>
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
            <PersonTile />
          </Layout>
        </Wrapper>
      </Container>
    </>
  );
};

export default MoviePage;
