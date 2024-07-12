import { getProductsApi } from "../../api/fetch-api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

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
        console.log(results);
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
    <div>
      <h2>Tranding Week</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {films.length > 0 && <MovieList films={films} />}
    </div>
  );
};

export default HomePage;
