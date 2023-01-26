import { Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';

const Layout = lazy(() => import('../Layout'));
const Home = lazy(() => import('../../Pages/Home'));
const Movie = lazy(() => import('../../Pages/Movie'));
const MovieCard = lazy(() => import('../../Pages/MovieCard'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

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