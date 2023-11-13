import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const MoviePage = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/" element={<MoviesPage />} />
        <Route path="movies/:movieId/" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
};
