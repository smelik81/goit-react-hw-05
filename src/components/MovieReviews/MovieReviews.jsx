import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/fetch-api";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!moviesId) {
      console.error("moviesId is undefined");
      setError(true);
      return;
    }

    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        setError(false);
        const dataReviews = await getMovieReviews(moviesId);
        setReviews(dataReviews);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [moviesId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Error loading movie details.</p>}
      {reviews.length > 0 && (
        <ul className={css.reviewList}>
          {reviews.map((review) => (
            <li key={review.id}>
              <p className={css.reviewTitle}>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
