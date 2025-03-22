import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../features/movieSlice';
import MovieCard from '../components/MovieCard';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        Error: {error}
      </div>
    );
  }

  if (!selectedMovie) {
    return null;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-content">
        <div className="movie-poster-section">
          <img
            src={selectedMovie.Poster !== 'N/A' ? selectedMovie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
            alt={selectedMovie.Title}
            className="movie-detail-poster"
          />
        </div>
        
        <div className="movie-info-section">
          <h1 className="movie-detail-title">{selectedMovie.Title}</h1>
          
          <div className="movie-meta">
            <span className="movie-year">{selectedMovie.Year}</span>
            <span className="movie-runtime">{selectedMovie.Runtime}</span>
            <span className="movie-rating">⭐ {selectedMovie.imdbRating}</span>
          </div>

          <div className="movie-genre">
            <strong>Genre:</strong> {selectedMovie.Genre}
          </div>

          <div className="movie-director">
            <strong>Director:</strong> {selectedMovie.Director}
          </div>

          <div className="movie-actors">
            <strong>Cast:</strong> {selectedMovie.Actors}
          </div>

          <div className="movie-plot">
            <strong>Plot:</strong>
            <p>{selectedMovie.Plot}</p>
          </div>

          <div className="movie-awards">
            <strong>Awards:</strong>
            <p>{selectedMovie.Awards}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 