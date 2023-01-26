import { BigMovieTileWrapper, Poster } from "./styled";
import poster from "../../images/bigposter.png"

const BigMovieTile = () => {
  return (
    <>
      <BigMovieTileWrapper>
        <Poster src={poster}></Poster>
      </BigMovieTileWrapper>
    </>
  );
};

export default BigMovieTile;
