import { BigMovieTileWrapper, Poster } from "./styled";

const BigMovieTile = ({ poster }) => {
  return (
    poster && (
      <BigMovieTileWrapper>
        <Poster src={poster}></Poster>
      </BigMovieTileWrapper>
    )
  );
};

export default BigMovieTile;
