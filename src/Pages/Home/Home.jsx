import { useState, useEffect } from 'react';
import { Container } from '../../components/Header/Header.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import moviesAPI from '../../components/serviceAPI/serviceAPI';

const filmsAPI = new moviesAPI();

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      setPopularMovies(await filmsAPI.getTrendingMovies());
    }
    fetchTrendMovies();
  }, []);

  return (
    <Container>
      <h2>Tranding today</h2>
      <MoviesList films={popularMovies} path={'movies/'} />
    </Container>
  );
};

export default Home;