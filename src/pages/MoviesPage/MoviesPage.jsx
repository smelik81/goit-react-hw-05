import { Link, useParams } from "react-router-dom";

export default function MoviesPage() {
  const { moviesId } = useParams();

  return (
    <div>
      <p>Films Details</p>
      <Link to={`/movies/${moviesId}/details`}>See details</Link>
    </div>
  );
}
