import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/api';
import {
  HomeWrapper,
  MoviesItem,
  MoviesItemInfo,
  MoviesItemRating,
  MoviesItemText,
  MoviesItemTitle,
  MoviesListWrapper,
  StyledLink,
} from './Home.styled';

const HomePage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchTrendingMovies();
      setMoviesList(data.results);
    }
    handleFetch();
  }, []);

  return (
    <HomeWrapper>
      <MoviesListWrapper>
        {moviesList.map(({ title, name, id, poster_path, vote_average }) => {
          return (
            <MoviesItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt="poster"
                />
                <MoviesItemInfo>
                  <MoviesItemText>
                    <MoviesItemTitle>{name || title}</MoviesItemTitle>
                    <MoviesItemRating>
                      {vote_average.toFixed(1)}/10
                    </MoviesItemRating>
                  </MoviesItemText>
                </MoviesItemInfo>
              </StyledLink>
            </MoviesItem>
          );
        })}
      </MoviesListWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
