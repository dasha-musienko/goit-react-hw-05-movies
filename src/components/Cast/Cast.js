import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api';
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
  });

  return (
    <div>
      {cast.length > 0 ? (
        <CastWrapper>
          {cast.map(({ profile_path, name, character, id }) => {
            return (
              <CastItemWrapper key={id}>
                {profile_path ? (
                  <CastItemImg
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt="character"
                  />
                ) : (
                  <CastItemImg
                    src="https://pixabay.com/get/g0665b0a2029a2cd5f16df3e58f252e7ba0eec9586a6f803d8eb19c896acb68227a210fe8e79d577298d894c07ab89845b1c6610dd3bc5e1347f37896e5d8a8d4_1280.png"
                    alt="poster"
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
