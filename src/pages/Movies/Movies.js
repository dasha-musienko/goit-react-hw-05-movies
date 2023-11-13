import { useEffect, useState } from 'react';
import {  useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api';
import { MoviesWrapper, SearchBar, SearchBtn, SearchInput } from './Movies.styled';
import {
  MoviesItem,
  MoviesItemInfo,
  MoviesItemRating,
  MoviesItemText,
  MoviesItemTitle,
  MoviesListWrapper,
  StyledLink,
} from '../Home/Home.styled'
import { BiSearchAlt } from 'react-icons/bi';

const MoviesPage = () => {
  const [moviesList, setMoviesList] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    handleFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInput = evt => {
    const queryWord = evt.target.value.trim().toLowerCase();
    query = queryWord;
    const nextParams = queryWord !== '' ? { query: queryWord } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = () => {
    handleFetch();
  };

  async function handleFetch() {
    const data = await fetchMoviesByQuery(query);
    setMoviesList(data.results);
    if (data.results.length === 0) {
      alert('There are no movies found by your qury. Try the valid name.');
    }
  }
  return (
    <MoviesWrapper>
      <SearchBar>
        <SearchInput type="text" value={query} onChange={handleInput} />
        <SearchBtn onClick={handleSubmit}>
          <BiSearchAlt size={20}/>
        </SearchBtn>
      </SearchBar>
      {moviesList.length > 0 && (
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
      )}
    </MoviesWrapper>
  );
};

export default MoviesPage;
