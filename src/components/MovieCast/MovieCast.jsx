import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/fetch-api";
import Loader from "../Loader";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!moviesId) {
      console.error("moviesId is undefined");
      setError(true);
      return;
    }

    const fetchMovieCast = async () => {
      setIsLoading(true);
      try {
        setError(false);
        const data = await getMovieCast(moviesId);
        setCast(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [moviesId]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w200/";

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Error loading movie details.</p>}
      {cast.length > 0 && (
        <ul>
          {cast.map(({ cast_id, name, character, profile_path }) => (
            <li key={cast_id}>
              <p className={css.castName}>{name}</p>
              {profile_path && (
                <img src={`${imageBaseUrl}${profile_path}`} alt={name} />
              )}
              <p className={css.castRole}>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
