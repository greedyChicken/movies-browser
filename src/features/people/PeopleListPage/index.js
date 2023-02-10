import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PersonTile } from "../../../common/PersonTile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  fetchSearchResults,
  selectError,
  selectLastPage,
  selectLoading,
  selectPeople,
  selectPeopleCount,
} from "../peopleSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { useLocation, useParams } from "react-router-dom";
import { TileLink } from "../../../common/TileLink";
import searchQueryParamName from "../../../common/searchQueryParamName";
import { useQueryParameter } from "../../../common/queryParameters";
import NoResultsPage from "../../../common/NoResultsPage";
import { PeopleContainer } from "./styled";

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
  const peopleCount = useSelector(selectPeopleCount);

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
            <PageHeader
              title={query ? `Search results for "${query}"` : `Popular people`}
            />
            <Loader />
          </>
        ) : popularPeople.length === 0 ? (
          <NoResultsPage query={query} />
        ) : (
          <>
            <PageHeader
              title={
                query
                  ? `Search results for "${query}" (${peopleCount})`
                  : `Popular people`
              }
            />
            <PeopleContainer>
              {popularPeople?.map((person) => (
                <TileLink to={`/people/person/${person.id}`} key={person.id}>
                  <PersonTile
                    profile={person.profile_path}
                    fullName={person.name}
                  />
                </TileLink>
              ))}
            </PeopleContainer>
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
