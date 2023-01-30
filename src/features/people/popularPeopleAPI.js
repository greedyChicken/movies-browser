export const getPopularPeople = async () => {
  const APIUrl = `https://api.themoviedb.org/3/person/popular?api_key=951446c9e47a99cb6ccfb776c60023c7&language=en-US&page=1`;

  const response = await fetch(APIUrl);

  const popularPeople = await response.json();

  return popularPeople;
};
