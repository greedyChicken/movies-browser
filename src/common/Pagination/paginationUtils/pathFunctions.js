export const getFirstPage = (type, searchParam) => {
  return `/${type}/1${searchParam}`;
};

export const getPreviousPage = (type, page, searchParam) => {
  return page > 1
    ? `/${type}/${parseInt(page) - 1}${searchParam}`
    : `/${type}/${page}${searchParam}`;
};

export const getNextPage = (type, page, lastPage, searchParam) => {
  return page < lastPage
    ? `/${type}/${parseInt(page) + 1}${searchParam}`
    : `/${type}/${page}${searchParam}`;
};

export const getLastPage = (type, lastPage, searchParam) => {
  return `/${type}/${lastPage}${searchParam}`;
};
