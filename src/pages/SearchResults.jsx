import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../features/movieSlice';
import MovieCard from '../components/MovieCard';

const SearchResults = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query));
    }
  }, [dispatch, query]);

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
        Hata: {error}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">
         Search Results for "{query}" {searchResults.length} movies found
        <span className="search-count">
          ({searchResults.length} movies found)
        </span>
      </h1>

      {searchResults.length === 0 ? (
        <div className="no-results">
          <p>No movies were found that match your search criteria.</p>
          <p>You can try different keywords or change the filters.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {searchResults.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;