import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../../searchQueryParamName";
import { SearchBar, SearchIcon, SearchInput } from "./styled";

export const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const history = useHistory();

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <SearchBar>
      <SearchIcon />
      <SearchInput
        placeholder={`Search for ${
          location.pathname === "/movies" ? "movies..." : "people..."
        }`}
        type="text"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchBar>
  );
};
