export const getFirstPage = (type) => {
  return `/${type}/1`;
};

export const getPreviousPage = (type, page) => {
  return page > 1 ? `/${type}/${parseInt(page) - 1}` : `/${type}/${page}`;
};

export const getNextPage = (type, page, lastPage) => {
  return page < lastPage
    ? `/${type}/${parseInt(page) + 1}`
    : `/${type}/${page}`;
};

export const getLastPage = (type, lastPage) => {
  return `/${type}/${lastPage}`;
};
