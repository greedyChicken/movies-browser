import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  const secondSlash = location.pathname.indexOf("/", 1);

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(
      `${location.pathname.slice(0, secondSlash)}/1?${searchParams.toString()}`
    );
  };

  return replaceQueryParameter;
};
