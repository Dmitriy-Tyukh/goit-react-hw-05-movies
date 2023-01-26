import { useState, useEffect } from 'react';
import { Container } from '../../components/Header/Header.styled';
import MoviesList from '../../components/MoviesList';
import moviesAPI from '../../components/serviceAPI';
import Loader from '../../components/Loader'

const filmsAPI = new moviesAPI();

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
      async function fetchTrendMovies() {
          setIsLoading(true);
          try {
            setPopularMovies(await filmsAPI.getTrendingMovies());
          } catch (error) {
            console.log(error)
          } finally {
              setIsLoading(false);
          }
    }
    fetchTrendMovies();
  }, []);

  return (
    <Container>
      <h2>Tranding today</h2>
      {isLoading && <Loader />}
      <MoviesList films={popularMovies} path={'movies/'} />
    </Container>
  );
};

export default Home;