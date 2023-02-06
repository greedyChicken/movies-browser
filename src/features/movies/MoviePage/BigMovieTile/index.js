import {
  Backdrop,
  BackdropContainer,
  Background,
  Pleksa,
  Poster,
  Title,
} from "./styled";

const BigMovieTile = ({ poster, title }) => {
  return (
    poster && (
      <Background>
        <BackdropContainer>
          <Pleksa>
            <Title>{title}</Title>
          </Pleksa>
          <Backdrop src={poster}></Backdrop>
        </BackdropContainer>
      </Background>
    )
  );
};

export default BigMovieTile;
