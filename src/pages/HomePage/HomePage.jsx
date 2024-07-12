import { getProductsApi } from "../../api/fetch-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";
import Loader from "../../components/Loader";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const { results } = await getProductsApi();
        setFilms(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && (
        <p style={{ color: "black", fontSize: "28px" }}>
          Error fetching data: {error.message}
        </p>
      )}
      {films.length > 0 && (
        <>
          <h2 className={css.homeTitle}>Tranding Week</h2>
          <MovieList films={films} />
        </>
      )}
    </div>
  );
};

export default HomePage;
