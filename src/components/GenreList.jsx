import { useNavigate } from 'react-router-dom';

const GenreList = () => {
  const navigate = useNavigate();
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller"
  ];

  const handleGenreClick = (genre) => {
    navigate(`/genre/${genre}`);
  };

  return (
    <div className="genre-list">
      <h2 className="section-title">Movie Genres</h2>
      <div className="genre-grid">
        {genres.map((genre) => (
          <button
            key={genre}
            className="genre-button"
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreList; 