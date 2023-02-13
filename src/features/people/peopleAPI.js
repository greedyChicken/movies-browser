import { APIKey, APIUrl } from "../dataAPI";

export const getPopularPeople = async (pageNumber) => {
  const response = await fetch(
    `${APIUrl}/person/popular?api_key=${APIKey}&language=en-US&page=${pageNumber}`
  );

  const popularPeople = await response.json();

  return popularPeople;
};

export const getPeopleSearchResults = async (query, pageNumber) => {
  const response = await fetch(
    `${APIUrl}/search/person?api_key=${APIKey}&language=en-US&query=${query}&page=${pageNumber}`
  );

  const searchResults = await response.json();

  return searchResults;
};
