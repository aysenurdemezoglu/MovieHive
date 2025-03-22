import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../features/movieSlice';
import MovieCard from '../components/MovieCard';
import GenreList from '../components/GenreList';

const HomePage = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

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

  return (
    <div className="container">
      <GenreList />
      
      <h1 className="page-title">
        Popular Movies
        <span className="movie-count">({popularMovies.length} movies)</span>
      </h1>

      <div className="movie-grid">
        {popularMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage; 