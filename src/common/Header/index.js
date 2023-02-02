import { Search } from "./Search";
import {
  Container,
  Content,
  Item,
  List,
  Logo,
  LogoIcon,
  LogoTitle,
  Navigation,
  StyledLink,
  StyledNavLink,
  Wrapper,
} from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Container>
          <Logo>
            <StyledLink to={"/movies"}>
              <LogoIcon />
              <LogoTitle>Movies Browser</LogoTitle>
            </StyledLink>
          </Logo>
          <Navigation>
            <List>
              <Item>
                <StyledNavLink to={"/movies"}>Movies</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to={"/people"}>People</StyledNavLink>
              </Item>
            </List>
          </Navigation>
        </Container>
        <Search />
      </Content>
    </Wrapper>
  );
};
