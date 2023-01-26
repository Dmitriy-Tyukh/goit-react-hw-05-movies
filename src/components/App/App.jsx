import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import Layout from '../Layout';

const Home = lazy(() => import('../../Pages/Home/Home'));
const Movie = lazy(() => import('../../Pages/Movie/Movie'));
const MovieCard = lazy(() => import('../../Pages/MovieCard/MovieCard'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
        <Route path="movies/:movieId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
