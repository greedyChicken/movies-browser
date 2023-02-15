import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PersonTile } from "../../../common/PersonTile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  fetchPeopleSearchResults,
  selectError,
  selectLastPage,
  selectLoading,
  selectPage,
  selectPeople,
  selectPeopleCount,
} from "../peopleSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { TileLink } from "../../../common/TileLink";
import { searchQueryParamName } from "../../../common/queryParamNames";
import { useQueryParameter } from "../../../common/queryParameters";
import NoResultsPage from "../../../common/NoResultsPage";
import { PeopleContainer } from "./styled";
import { usePage } from "../../utilities";

const PeopleListPage = () => {
  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPeople);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const lastPage = useSelector(selectLastPage);
  const query = useQueryParameter(searchQueryParamName);
  const page = usePage(selectPage);
  const peopleCount = useSelector(selectPeopleCount);

  useEffect(() => {
    query
      ? dispatch(fetchPeopleSearchResults({ query, page }))
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
                <TileLink to={`/people/${person.id}`} key={person.id}>
                  <PersonTile
                    profile={person.profile_path}
                    fullName={person.name}
                  />
                </TileLink>
              ))}
            </PeopleContainer>
            <Pagination currentPage={page} lastPage={lastPage} />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleListPage;
