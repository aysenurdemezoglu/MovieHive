import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/favoritesSlice';

const MovieCard = ({ movie, showFavoriteButton = true }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.imdbID));
    } else {
      dispatch(addToFavorites(movie));
    }
  };

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
          alt={movie.Title}
          className="movie-poster"
        />
      </Link>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <div className="movie-meta">
          <p className="movie-year">{movie.Year}</p>
          {movie.imdbRating && (
            <div className="movie-rating">
              <span className="star">⭐</span>
              <span>{movie.imdbRating}</span>
            </div>
          )}
        </div>
      </div>
      {showFavoriteButton && (
        <button
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      )}
    </div>
  );
};

export default MovieCard; 