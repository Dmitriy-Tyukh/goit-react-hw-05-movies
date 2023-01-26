import MoviesItem from '../MoviesItem/MoviesItem';
import { Container } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ films, path }) => {
    const location = useLocation();

    return (
      <Container>
        <ul>
          {films.map(({ id, title }) => (
              <MoviesItem
                key={id}
                id={id}
                path={path}
                title={title}
                state={{ from: location }}
              />
          ))}
        </ul>
      </Container>
    );
}

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  path: PropTypes.string,
};