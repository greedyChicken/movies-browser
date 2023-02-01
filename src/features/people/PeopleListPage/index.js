import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import { PersonTile } from "../../../common/PersonTile";
import { Layout } from "../../../common/Layout/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPeople,
  selectError,
  selectLoading,
  selectPeople,
} from "../peopleSlice";
import { useEffect } from "react";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import { nanoid } from "@reduxjs/toolkit";

const PeopleListPage = () => {
  const dispatch = useDispatch();
  const popularPeople = useSelector(selectPeople);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

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
                  key={nanoid()}
                  poster={`${APIImageUrl}/original${person.profile_path}`}
                  fullName={person.name}
                />
              ))}
            </Layout>
            <Pagination />
          </>
        )}
      </Container>
    </>
  );
};

export default PeopleListPage;
