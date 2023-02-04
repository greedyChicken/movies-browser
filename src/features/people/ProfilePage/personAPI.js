import { APIKey, APIUrl } from "../../dataAPI";

export const getPerson = async (personId) => {
  const response = await fetch(
    `${APIUrl}/person/${personId}?api_key=${APIKey}&language=en-US`
  );

  const person = await response.json();

  return person;
};

export const getPersonCredits = async (personId) => {
  const response = await fetch(
    `${APIUrl}/person/${personId}/person_credits?api_key=${APIKey}&language=en-US`
  );

  const personCredits = await response.json();

  return personCredits;
};
