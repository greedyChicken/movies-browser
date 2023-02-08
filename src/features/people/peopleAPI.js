import { APIKey, APIUrl } from "../dataAPI";

export const getPopularPeople = async (pageNumber) => {
  const response = await fetch(
    `${APIUrl}/person/popular?api_key=${APIKey}&language=en-US&page=${pageNumber}`
  );

  const popularPeople = await response.json();

  return popularPeople;
};
