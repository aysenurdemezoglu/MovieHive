import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_OMDB_API_URL,
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY,
  },
});

// Get popular movies
export const getPopularMovies = async () => {
  const popularTitles = [
    "Inception",
    "The Dark Knight",
    "Pulp Fiction",
    "Fight Club",
    "Matrix",
    "Forrest Gump",
    "The Godfather",
    "The Shawshank Redemption",
    "Interstellar",
    "Gladiator",
    "The Lord of the Rings",
    "Saving Private Ryan",
    "The Green Mile",
    "Goodfellas",
    "The Silence of the Lambs",
    "Schindler's List",
    "The Departed",
    "Memento",
    "The Prestige",
    "Se7en",
    "The Usual Suspects",
    "Léon: The Professional",
    "American History X",
    "Apocalypse Now",
    "Alien",
    "Blade Runner",
    "The Terminator",
    "Die Hard",
    "Jurassic Park",
    "Back to the Future",
    "Indiana Jones and the Raiders of the Lost Ark",
    "Star Wars: Episode IV - A New Hope",
    "The Good, the Bad and the Ugly",
    "Casablanca",
    "One Flew Over the Cuckoo's Nest",
    "A Beautiful Mind",
    "The Pianist",
    "Braveheart",
    "Taxi Driver",
    "The Big Lebowski",
    "No Country for Old Men",
    "There Will Be Blood",
    "The Sixth Sense",
    "The Truman Show",
    "Good Will Hunting",
  ];

  const movies = await Promise.all(
    popularTitles.map((title) =>
      api.get("", { params: { t: title, plot: "full" } })
    )
  );
  return movies.map((response) => response.data);
};

// Search movies
export const searchMovies = (searchTerm) => {
  return api.get("", {
    params: {
      s: searchTerm,
      type: "movie",
    },
  });
};

// Get movie details
export const getMovieDetails = (imdbId) => {
  return api.get("", {
    params: {
      i: imdbId,
      plot: "full",
    },
  });
};

// Search movies by genre
export const searchMoviesByGenre = async (genre) => {
  // Popular movies for each genre to ensure we get quality results
  const genreMovies = {
    Action: [
      "Die Hard",
      "Mad Max: Fury Road",
      "John Wick",
      "The Dark Knight",
      "Mission: Impossible",
      "Gladiator",
      "300",
      "The Matrix",
      "Terminator 2",
      "Kill Bill",
      "Casino Royale",
      "Wonder Woman",
      "Black Panther",
      "Top Gun: Maverick",
      "Edge of Tomorrow",
    ],
    Adventure: [
      "Indiana Jones and the Raiders of the Lost Ark",
      "The Lord of the Rings",
      "Pirates of the Caribbean",
      "Jurassic Park",
      "Avatar",
      "The Hobbit",
      "National Treasure",
      "The Mummy",
      "King Kong",
      "The Princess Bride",
      "The Goonies",
      "Dune",
      "Jungle Cruise",
      "Journey to the Center of the Earth",
      "The Lost City",
    ],
    Animation: [
      "Toy Story",
      "Spirited Away",
      "The Lion King",
      "Finding Nemo",
      "Up",
      "WALL-E",
      "Frozen",
      "Coco",
      "Zootopia",
      "How to Train Your Dragon",
      "Spider-Man: Into the Spider-Verse",
      "Moana",
      "Inside Out",
      "Big Hero 6",
      "Ratatouille",
    ],
    Comedy: [
      "The Hangover",
      "Superbad",
      "Bridesmaids",
      "Shaun of the Dead",
      "Groundhog Day",
      "The Grand Budapest Hotel",
      "Deadpool",
      "Anchorman",
      "Mean Girls",
      "The Big Lebowski",
      "Dumb and Dumber",
      "Wedding Crashers",
      "21 Jump Street",
      "The Other Guys",
      "Game Night",
    ],
    Crime: [
      "The Godfather",
      "Goodfellas",
      "Pulp Fiction",
      "The Departed",
      "Heat",
      "Casino",
      "Scarface",
      "The Usual Suspects",
      "No Country for Old Men",
      "L.A. Confidential",
      "The Irishman",
      "Ocean's Eleven",
      "American Gangster",
      "Donnie Brasco",
      "The Town",
    ],
    Drama: [
      "The Shawshank Redemption",
      "Forrest Gump",
      "The Green Mile",
      "Schindler's List",
      "A Beautiful Mind",
      "The Pursuit of Happyness",
      "Good Will Hunting",
      "The Social Network",
      "Whiplash",
      "The Theory of Everything",
      "The Imitation Game",
      "12 Years a Slave",
      "Dallas Buyers Club",
      "The Revenant",
      "Manchester by the Sea",
    ],
    Fantasy: [
      "Harry Potter and the Philosopher's Stone",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Pan's Labyrinth",
      "The Princess Bride",
      "The Chronicles of Narnia",
      "Stardust",
      "Coraline",
      "The NeverEnding Story",
      "Edward Scissorhands",
      "Big Fish",
      "The Shape of Water",
      "Miss Peregrine's Home for Peculiar Children",
      "The Golden Compass",
      "Bridge to Terabithia",
      "Maleficent",
    ],
    Horror: [
      "The Shining",
      "A Nightmare on Elm Street",
      "The Exorcist",
      "Get Out",
      "Alien",
      "The Silence of the Lambs",
      "The Conjuring",
      "It",
      "The Babadook",
      "A Quiet Place",
      "Hereditary",
      "The Thing",
      "The Witch",
      "Don't Breathe",
      "Midsommar",
    ],
    Mystery: [
      "Se7en",
      "Memento",
      "The Usual Suspects",
      "Shutter Island",
      "Gone Girl",
      "Inception",
      "Zodiac",
      "Prisoners",
      "The Prestige",
      "Knives Out",
      "Murder on the Orient Express",
      "The Girl with the Dragon Tattoo",
      "Mystic River",
      "The Sixth Sense",
      "L.A. Confidential",
    ],
    Romance: [
      "Titanic",
      "The Notebook",
      "Eternal Sunshine of the Spotless Mind",
      "La La Land",
      "Pride & Prejudice",
      "About Time",
      "500 Days of Summer",
      "The Fault in Our Stars",
      "Before Sunrise",
      "Notting Hill",
      "The Theory of Everything",
      "A Star Is Born",
      "The Time Traveler's Wife",
      "Me Before You",
      "The Age of Adaline",
    ],
    "Sci-Fi": [
      "Blade Runner",
      "The Matrix",
      "Inception",
      "Interstellar",
      "Arrival",
      "Ex Machina",
      "The Martian",
      "District 9",
      "Edge of Tomorrow",
      "Looper",
      "Gravity",
      "Annihilation",
      "Dune",
      "Tenet",
      "Ready Player One",
    ],
    Thriller: [
      "Silence of the Lambs",
      "Fight Club",
      "Gone Girl",
      "Inception",
      "Shutter Island",
      "Prisoners",
      "Nightcrawler",
      "The Departed",
      "No Country for Old Men",
      "The Girl with the Dragon Tattoo",
      "Black Swan",
      "A Quiet Place",
      "Don't Breathe",
      "Wind River",
      "Sicario",
    ],
  };

  const movieTitles = genreMovies[genre] || [];

  if (movieTitles.length === 0) {
    return [];
  }

  try {
    const movies = await Promise.all(
      movieTitles.map((title) =>
        api.get("", { params: { t: title, plot: "full" } })
      )
    );

    return movies
      .map((response) => response.data)
      .filter((movie) => movie.Response !== "False");
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return [];
  }
};

export default api;
