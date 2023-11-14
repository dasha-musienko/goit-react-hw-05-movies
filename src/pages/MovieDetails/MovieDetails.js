import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api';
import {
  BackLink,
  DetailLink,
  DetailsContainer,
  Genre,
  GenresContainer,
  InfoWrapper,
  MovieDetailsContainer,
  MovieDetailsWrapper,
  MovieHeading,
  MovieImage,
  MovieInfoContainer,
  MovieOverview,
  MovieText,
} from './MovieDetails.styled';
import { FaArrowLeft } from 'react-icons/fa';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchMovieDetails(movieId);
      setMovieInfo({ ...data });
    }
    handleFetch();
  }, [movieId]);

  const { poster_path, vote_average, overview, genres, name } = movieInfo;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <MovieDetailsWrapper>
      <BackLink to={backLink.current}>
        <FaArrowLeft />
        <p>Go Back</p>
      </BackLink>
      {name !== 'AxiosError' ? (
        <MovieDetailsContainer>
          <MovieInfoContainer>
            <MovieImage
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                  : defaultImg
              }
              alt="character"
            />

            <InfoWrapper>
              <MovieHeading>{movieInfo.title}</MovieHeading>
              {vote_average && (
                <MovieText>{vote_average.toFixed(1)} / 10</MovieText>
              )}
              <MovieOverview>{overview}</MovieOverview>
              <GenresContainer>
                {genres?.map(({ id, name }) => {
                  return <Genre key={id}>{name}</Genre>;
                })}
              </GenresContainer>
            </InfoWrapper>
          </MovieInfoContainer>

          <DetailsContainer>
            <li>
              <DetailLink to={`/movies/${movieId}/cast`}>Cast</DetailLink>
            </li>
            <li>
              <DetailLink to={`/movies/${movieId}/reviews`}>Reviews</DetailLink>
            </li>
          </DetailsContainer>

          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MovieDetailsContainer>
      ) : (
        <div>No info found for this movie</div>
      )}
    </MovieDetailsWrapper>
  );
};

export default MoviePage;
