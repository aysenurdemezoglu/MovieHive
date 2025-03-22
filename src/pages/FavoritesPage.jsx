import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="container">
      <h1 className="page-title">
        Favorites
        <span className="favorites-count">({favorites.length} movies)</span>
      </h1>

      {favorites.length === 0 ? (
        <div className="no-results">
          <p>No favorite movies yet</p>
          <p>Start adding movies to your favorites!</p>
        </div>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              showFavoriteButton={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage; 