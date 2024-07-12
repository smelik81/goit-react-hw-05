import { Link } from "react-router-dom";

export default function MovieList({ films }) {
  return (
    <div>
      <ul>
        {films.map((film) => (
          <li key={film.id}>
            <h2>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
