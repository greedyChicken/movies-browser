import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../common/Container";
import PageHeader from "../../../common/PageHeader";
import Pagination from "../../../common/Pagination";
import ErrorPage from "../../../common/ErrorPage";
import Loader from "../../../common/Loader";
import { APIImageUrl } from "../../dataAPI";
import BigPersonTile from "./BigPersonTile";
import {
  selectPerson,
  fetchPersonId,
  selectPersonCredits,
  selectError,
  selectLoading,
} from "./personSlice";
import { useParams } from "react-router-dom";

const PersonPage = () => {
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const personCredits = useSelector(selectPersonCredits);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const params = useParams();

  useEffect(() => {
    dispatch(fetchPersonId(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error || !person?.id ? (
          <ErrorPage />
        ) : (
          <>
            <BigPersonTile
              poster={`${APIImageUrl}/original${person.profile_path}`}
              name={person.name}
              birthday={person.birthday}
              birthplace={person.place_of_birth}
              biography={person.biography}
            />
            <PageHeader title="Movies Cast" />
            <Pagination />
          </>
        )}
      </Container>
    </>
  );
};

export default PersonPage;
