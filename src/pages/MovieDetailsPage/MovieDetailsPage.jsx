import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMoviesId } from "../../api/fetch-api";
import Loader from "../../components/Loader";
import css from "./MovieDetailsPage.module.css";

export default function MoviesDetailsPage() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        setError(false);
        const data = await getMoviesId(moviesId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [moviesId]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className={css.details}>
      {isLoading && <Loader />}
      {error && <p>Error loading movie details.</p>}

      {movie && (
        <div>
          <div className={css.container}>
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className={css.imgMovie}
            />
            <div className={css.textWrapper}>
              <h2>{movie.title}</h2>
              <p className={css.rating}>Rating: {movie.vote_average}</p>
              <p>
                <b>Overview:</b> {movie.overview}
              </p>
              <p>
                <b>Genres:</b>{" "}
                {movie.genres.map((genre) => genre.name).join(",")}
              </p>
            </div>
          </div>
          <ul>
            <li>
              <NavLink to="credits">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
