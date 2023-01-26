import {List, Section, ButtonBack, AdditionalLinkStyled} from './MovieCard.styled';
import { Outlet, useLocation,useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { Container } from '../../components/Header/Header.styled';
import { IconContext } from 'react-icons';
import { FiArrowLeft } from 'react-icons/fi';
import moviesAPI from '../../components/serviceAPI/serviceAPI';
import CardFilm from '../../components/Card/Card';

const movieAPI = new moviesAPI();

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetales] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const MovieDetails = !Object.keys(movieDetails).length;

  useEffect(() => {
    async function fetchMovie(id) {
      setMovieDetales(await movieAPI.getMovie(id));
    }
    fetchMovie(movieId);
  }, [movieId]);

  if (MovieDetails) return;

  return (
    <main>
      <Container>
        <IconContext.Provider value={{ color: 'with', size: '1.25rem' }}>
          <ButtonBack
            area-label="Go back"
            type="button"
            variant="outlined"
            onClick={() => navigate(location?.state?.from ?? '/')}
            startIcon={<FiArrowLeft />}
          > Go back</ButtonBack>
        </IconContext.Provider>
      </Container>

      <CardFilm movieDetales={movieDetails} />

      <Section>
        <Container>
          <h3>Additional info</h3>
          <List>
            <li>
              <AdditionalLinkStyled to="cast" state={location}>
                Cast
              </AdditionalLinkStyled>
            </li>
            <li>
              <AdditionalLinkStyled to="reviews" state={location}>
                Reviews
              </AdditionalLinkStyled>
            </li>
          </List>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Section>
    </main>
  );
};

export default MovieDetails;