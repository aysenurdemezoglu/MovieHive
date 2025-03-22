import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import SearchResults from './pages/SearchResults';
import FavoritesPage from './pages/FavoritesPage';
import GenrePage from './pages/GenrePage';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/genre/:genre" element={<GenrePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
