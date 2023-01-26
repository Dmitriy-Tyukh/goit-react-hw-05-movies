import { ItemStyled, LinkStyled } from './MoviesItem.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesItem = ({ title, id, path }) => {
    const location = useLocation();
    const additionalPath = path ? `${path}` : '';
  return (
    <ItemStyled>
      <LinkStyled to={`${additionalPath}${id}`} state={location.state}>
        {title}
      </LinkStyled>
    </ItemStyled>
  );
};

export default MoviesItem;

MoviesItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired
};