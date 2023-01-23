import { MovieTitle, Poster, TileContainer } from "./styled";
import image from "../../images/poster.png";

export const PopularMoviesTile = () => {
  return (
    <TileContainer>
      <Poster src={image} alt="Movie Poster"></Poster>
      <MovieTitle>Mulan</MovieTitle>
    </TileContainer>
  );
};
