import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ films }) {
  const location = useLocation();

  return (
    <div className={css.contaiber}>
      <ul className={css.movieList}>
        {films.map((film) => (
          <li key={film.id} className={css.movieItem}>
            <h2 className={css.movieListTitle}>
              <NavLink
                to={`/movies/${film.id}`}
                className={css.movieLink}
                state={location}
              >
                {film.title}
              </NavLink>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
