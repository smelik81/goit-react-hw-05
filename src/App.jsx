import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviesDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <div>
      <header className="header">
        <Navigation />
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MoviesDetailsPage />} />
          <Route path="*" element={<div>NotFoundPage</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
