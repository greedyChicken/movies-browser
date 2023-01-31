import { APIKey, APIUrl } from "../dataAPI";

export const getPopularPeople = async () => {
  const response = await fetch(
    `${APIUrl}/person/popular?api_key=${APIKey}&language=en-US&page=1`
  );

  const popularPeople = await response.json();

  return popularPeople;
};
