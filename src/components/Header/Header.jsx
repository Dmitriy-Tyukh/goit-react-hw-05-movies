import {Container, HeaderStyled, Link, List, Wraper, LogoText} from './Header.styled';
import { useLocation } from 'react-router-dom';
import Film from '../Images/logo.png';

const Header = () => {
    const location = useLocation();
    return (
      <Container>
        <HeaderStyled>
          <Wraper>
            <img src={Film} alt="Logo - Movie Studio" className="filmLogo" />
            <LogoText> Movie Studio</LogoText>
          </Wraper>
          <nav>
            <List>
              <li>
                <Link to="/" state={{ from: location }} end>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies"> Movies </Link>
              </li>
            </List>
          </nav>
        </HeaderStyled>
      </Container>
    );
}

export default Header;