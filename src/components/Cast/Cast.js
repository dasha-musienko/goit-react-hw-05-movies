import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'components/api';
import {
  CastItemImg,
  CastItemName,
  CastItemRole,
  CastItemWrapper,
  CastNoInfo,
  CastWrapper,
} from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchMovieCast(movieId);
      data.cast && setCast(data.cast);
    }
    handleFetch();
  }, []);

  return (
    <div>
      {cast.length > 0 ? (
        <CastWrapper>
          {cast.map(({ profile_path, name, character, id }) => {
            return (
              <CastItemWrapper key={id}>
                {profile_path && (
                  <CastItemImg
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt="character"
                  />
                )}
                <CastItemName>{name}</CastItemName>
                <CastItemRole>Role: {character}</CastItemRole>
              </CastItemWrapper>
            );
          })}
        </CastWrapper>
      ) : (
        <CastNoInfo>No info about cast</CastNoInfo>
      )}
    </div>
  );
};

export default Cast;
