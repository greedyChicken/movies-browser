import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import { PersonTile } from "../../../common/PersonTile";
import { Layout } from "../../../common/Layout/styled";

const PeopleListPage = () => {
  return (
    <>
      <Container>
        <PageHeader title="Popular people" />
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
      </Container>
    </>
  );
};

export default PeopleListPage;
