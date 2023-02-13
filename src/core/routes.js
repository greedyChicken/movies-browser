export const toMovies = ({ page } = { page: ":page" }) => `/movies/${page}`;
export const toMovie = ({ page } = { page: ":page" }, { id } = { id: ":id" }) =>
  `/movies/${page}/${id}`;
export const toFirstPageMovies = () => "/movies/1";

export const toPeople = ({ page } = { page: ":page" }) => `/people/${page}`;
export const toPerson = (
  { page } = { page: ":page" },
  { id } = { id: ":id" }
) => `/people/${page}/${id}`;
export const toFirstPagePeople = () => "/people/1";
export const toMainPagePeople = () => "/people";
