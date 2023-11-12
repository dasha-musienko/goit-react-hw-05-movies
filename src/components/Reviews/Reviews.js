import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/api';
import { ReviewsAuthor, ReviewsAuthorText, ReviewsItem, ReviewsNoInfo, ReviewsWrapper } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      const data = await fetchMovieReviews(movieId);
      data.results && setReviews(data.results);
    }
    handleFetch();
  });

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewsWrapper>
          {reviews.map(({ author, content, id }) => {
            return (
              <ReviewsItem key={id}>
                <ReviewsAuthor>Author: {author}</ReviewsAuthor>
                <ReviewsAuthorText>{content}</ReviewsAuthorText>
              </ReviewsItem>
            );
          })}
        </ReviewsWrapper>
      ) : (
        <ReviewsNoInfo>No info about reviews</ReviewsNoInfo>
      )}
    </div>
  );
};

export default Reviews;
