import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PersonTile } from "../../../common/PersonTile";
import { Layout } from "../../../common/Layout/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectError,
  selectLastPage,
  selectLoading,
  selectPeople,
} from "../peopleSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { useParams } from "react-router-dom";

const PeopleListPage = () => {
  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPeople);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const params = useParams();
  const page = params.page;

  useEffect(() => {
    dispatch(fetchPeople(page));
  }, [dispatch, page]);

  return (
    <>
      <Container>
        {error ? (
          <ErrorPage />
        ) : loading ? (
          <>
            <PageHeader title="Popular people" />
            <Loader />
          </>
        ) : (
          <>
            <PageHeader title="Popular people" />
            <Layout>
              {popularPeople?.map((person) => (
                <PersonTile
                  key={person.id}
                  profile={`${APIImageUrl}/original${person.profile_path}`}
                  profilePath={person.profile_path}
                  fullName={person.name}
                />
              ))}
            </Layout>
            <Pagination
              currentPage={params.page}
              lastPage={lastPage}
              type={"people"}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleListPage;
