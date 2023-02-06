import {
  Backdrop,
  BackdropContainer,
  Background,
  Pleksa,
  Poster,
  Rate,
  Rating,
  Star,
  Title,
  Votes,
} from "./styled";
import star from "../../../../images/star.svg";

const BigMovieTile = ({ poster, title, voteCount, voteAverage }) => {
  return (
    poster && (
      <Background>
        <BackdropContainer>
          <Pleksa>
            <Title>{title}</Title>
            <Rating>
              <Rate>
                <Star src={star} />
                {voteAverage} <Votes>/ 10</Votes>
              </Rate>

              <Votes>{voteCount} votes</Votes>
            </Rating>
          </Pleksa>
          <Backdrop src={poster}></Backdrop>
        </BackdropContainer>
      </Background>
    )
  );
};

export default BigMovieTile;
