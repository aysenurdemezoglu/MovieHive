import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { searchMoviesByGenre } from '../services/movieApi';

const GenrePage = () => {
  const { genre } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        setLoading(true);
        setError(null);
        const genreMovies = await searchMoviesByGenre(genre);
        setMovies(genreMovies);
      } catch (err) {
        setError('Error loading movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genre]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">
        {genre} Movies
        <span className="movie-count">({movies.length} movies)</span>
      </h1>

      {movies.length === 0 ? (
        <div className="no-results">
          <p>No movies found in this genre.</p>
          <p>Please try another genre.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GenrePage; 