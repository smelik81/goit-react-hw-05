import { Link, useLocation, useSearchParams } from "react-router-dom";
import FilmSearch from "../../components/FilmSearch/FilmSearch";
import { useEffect, useState } from "react";
import { getSearch } from "../../api/fetch-api";
import Loader from "../../components/Loader";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noMovies, setNoMovies] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const location = useLocation();

  const handleSearchSubmit = (value) => {
    setSearchParams({ query: value });
    setHasSearched(true);
  };

  /*  const handleSearchSubmit = async (value) => {
    setSearchParams({ query: value });

    setIsLoading(true);
    setError(false);
    setNoMovies(false);
    setHasSearched(true);
    try {
      const results = await getSearch(value);
      if (results.length === 0) {
        setNoMovies(true);
      } else {
        setNoMovies(false);
      }
      setMovies(results);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }; */

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams.get("query") ?? "";
      if (!query) {
        setMovies([]);
        setNoMovies(false);
        return;
      }
      setIsLoading(true);
      setError(false);
      setNoMovies(false);

      try {
        const results = await getSearch(query);
        if (results.length === 0) {
          setNoMovies(true);
        } else {
          setNoMovies(false);
        }
        setMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [searchParams]);

  return (
    <div>
      <FilmSearch onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <p>Error loading movies..</p>}

      {!noMovies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className={css.itemMovie}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        noMovies && hasSearched && !isLoading && <p>No movies found.</p>
      )}
    </div>
  );
}
