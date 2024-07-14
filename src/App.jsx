import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Navigation />
      </header>

      <main className="main">
        <Suspense fallback={<div>Loading page code...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}>
              <Route path="credits" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
