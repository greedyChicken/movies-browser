import { useHistory, useLocation } from "react-router-dom";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { SearchBar, SearchIcon, SearchInput } from "./styled";

export const Search = () => {
  const location = useLocation();
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
