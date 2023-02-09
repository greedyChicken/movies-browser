import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PersonTile } from "../../../common/PersonTile";
import { Layout } from "../../../common/Layout/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  fetchSearchResults,
  selectError,
  selectLastPage,
  selectLoading,
  selectPeople,
} from "../peopleSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { useLocation, useParams } from "react-router-dom";
import { TileLink } from "../../../common/TileLink";
import searchQueryParamName from "../../../common/searchQueryParamName";
import { useQueryParameter } from "../../../common/queryParameters";

const PeopleListPage = () => {
  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPeople);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const params = useParams();
  const page = params.page < 1 || params.page > lastPage ? 1 : params.page;
  const { search } = useLocation();

  useEffect(() => {
    query
      ? dispatch(fetchSearchResults({ query, page }))
      : dispatch(fetchPeople(page));
  }, [dispatch, query, page]);

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
                <TileLink to={`/people/person/${person.id}`} key={person.id}>
                  <PersonTile
                    key={person.id}
                    profile={`${APIImageUrl}/w185${person.profile_path}`}
                    profilePath={person.profile_path}
                    fullName={person.name}
                  />
                </TileLink>
              ))}
            </Layout>
            <Pagination
              currentPage={page}
              lastPage={lastPage}
              type={"people"}
              searchParam={search ?? ""}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleListPage;
