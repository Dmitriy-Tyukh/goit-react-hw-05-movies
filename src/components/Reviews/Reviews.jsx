import { ReviewsItemStyled, ReviewsTitleStyled, ReviewsContentStyled, List} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../serviceAPI/serviceAPI';

const movieAPI = new moviesAPI();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI.getReviews(movieId).then(reviews => {
      if (reviews.length === 0) {
        return;
      }
      setReviews(reviews);
    });
  }, [movieId]);

  return (
    <section>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewsItemStyled key={id}>
                <ReviewsTitleStyled>{author}</ReviewsTitleStyled>
                <ReviewsContentStyled>{content}</ReviewsContentStyled>
              </ReviewsItemStyled>
            );
          })}
        </List>
      ) : (
        <div>No reviews found for this movie.</div>
      )}
    </section>
  );
};

export default Reviews;
