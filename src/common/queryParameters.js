import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const replaceQueryParameter = (keyValuePairs) => {
    const searchParams = new URLSearchParams(location.search);

    for (const { key, value } of keyValuePairs) {
      if (value === undefined) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    }

    history.push(`${location.pathname.slice(0, 7)}?${searchParams.toString()}`);
  };

  return replaceQueryParameter;
};
