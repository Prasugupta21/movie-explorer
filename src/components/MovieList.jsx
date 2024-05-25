import React, { useState, useEffect } from "react";
import {
  fetchPopularMovies,
  fetchMoviesByTitle,
  fetchMoviesByGenre,
  fetchGenres,
} from "../services/tmdb";
import { Link, useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState(""); // No default query
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getInitialMoviesAndGenres = async () => {
      const popularMovies = await fetchPopularMovies();
      const genres = await fetchGenres();
      setMovies(popularMovies);
      setGenres(genres);
    };

    getInitialMoviesAndGenres();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value.toLowerCase();
    const matchedGenre = genres.find(
      (genre) => genre.name.toLowerCase() === searchTerm
    );

    if (matchedGenre) {
      const movies = await fetchMoviesByGenre(matchedGenre.id);

      setMovies(movies);
    } else {
      const movies = await fetchMoviesByTitle(searchTerm);
      if (movies.length === 0) {
        navigate("/not-found");
        console.log("dfdf");
      } else setMovies(movies);
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : "";
      })
      .join(", ");
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="relative">
          <input
            type="text"
            name="search"
            className="h-10 w-full pl-10 pr-4 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search movies or genres..."
          />
          <button
            type="submit"
            className="absolute left-0 top-0 mt-2 ml-3 text-gray-400"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.25-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              ></path>
            </svg>
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 text-white p-4 rounded-lg">
            <Link to={`/movie/${movie.id}`}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-64 bg-gray-700 flex items-center justify-center rounded-lg mb-4">
                  <span>No Image</span>
                </div>
              )}
              <h3 className="text-lg font-bold">{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
