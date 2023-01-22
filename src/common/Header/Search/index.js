import { SearchBar, SearchIcon, SearchInput } from "./styled";

export const Search = () => {
  return (
    <SearchBar>
      <SearchIcon />
      <SearchInput placeholder="Search for movies..." type="text" />
    </SearchBar>
  );
};
