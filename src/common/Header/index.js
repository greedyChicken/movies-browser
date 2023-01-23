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
  NavLink,
  Wrapper,
} from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Container>
          <Logo>
            <LogoIcon />
            <LogoTitle>Movies Browser</LogoTitle>
          </Logo>
          <Navigation>
            <List>
              <Item>
                <NavLink>Movies</NavLink>
              </Item>
              <Item>
                <NavLink>People</NavLink>
              </Item>
            </List>
          </Navigation>
        </Container>
        <Search />
      </Content>
    </Wrapper>
  );
};
