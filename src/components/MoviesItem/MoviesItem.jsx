import { ItemStyled, LinkStyled } from './MoviesItem.styled';
import PropTypes from 'prop-types';

const MoviesItem = ({ title, id, path, state }) => {
    const additionalPath = path ? `${path}` : '';
  return (
    <ItemStyled>
      <LinkStyled to={`${additionalPath}${id}`} state={state}>
        {title}
      </LinkStyled>
    </ItemStyled>
  );
};

export default MoviesItem;

MoviesItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};