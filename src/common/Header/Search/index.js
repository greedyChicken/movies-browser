import { useLocation } from "react-router-dom";
import { SearchBar, SearchIcon, SearchInput } from "./styled";

export const Search = () => {
  const location = useLocation();

  return (
    <SearchBar>
      <SearchIcon />
      <SearchInput
        placeholder={`Search for ${
          location.pathname === "/movies" ? "movies..." : "people..."
        }`}
        type="text"
      />
    </SearchBar>
  );
};
