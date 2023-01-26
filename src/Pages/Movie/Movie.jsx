import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '../../components/Header/Header.styled';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';
import moviesAPI from '../../components/serviceAPI/serviceAPI';

const movieAP = new moviesAPI();

const Movie = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handlerSubmit = event => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value.trim().toLowerCase();
    setSearchParams(searchQuery !== '' ? { query: searchQuery } : {});
    event.target.reset();
  };

  useEffect(() => {
    if (!query) return;
    movieAP.searchMovie(query).then(setSearchResult);
  }, [query]);

  return (
    <Container>
      <h2>Find your movie</h2>
      <SearchForm onSubmit={handlerSubmit} />
      {searchResult.length > 0 && <MoviesList films={searchResult} path={''} />}
    </Container>
  );
};

export default Movie;