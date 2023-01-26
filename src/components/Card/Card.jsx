import { Container } from '../../components/Header/Header.styled';
import { CardStyled, Wraper, WraperImg } from './Card.styled';
import PropTypes from 'prop-types';

const CardFilm = ({
  movieDetales: { genres, title, posterPath, vote_average, overview },
}) => {
  const userScore = vote_average
    ? `${Math.round(vote_average * 10)}%`
        : 'No users votes';
 
  const movieGeners = genres.map(({ name }) => name).join(', ');
    
  return (
    <CardStyled>
      <Container>
        <Wraper>
          <WraperImg>
            <img src={posterPath} alt={title} />
          </WraperImg>
          <div>
            <h2>{title}</h2>
            <p>User score: {userScore}</p>

            <h3>Overview</h3>
            <div>{overview}</div>

            <h4>Genres</h4>
            {genres ? <div>{movieGeners}</div> : <div>Not found</div>}
          </div>
        </Wraper>
      </Container>
    </CardStyled>
  );
};

CardFilm.propTypes = {
  movieDetales: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};

export default CardFilm;
