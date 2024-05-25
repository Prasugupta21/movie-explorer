import axios from 'axios';

const API_KEY ='109ba873180ecdeb29fc728bdea2a288' ; 
const BASE_URL = 'https://api.themoviedb.org/3';



export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies from TMDB:", error);
    return [];
  }
};



export const fetchMoviesByTitle = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data from TMDB:", error);
    return [];
  }
};

export const fetchMoviesByGenre = async (genreId) => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data from TMDB:", error);
    return [];
  }
};

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching genres from TMDB:", error);
    return [];
  }

};
export const fetchMovieById = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details from TMDB:", error);
      return null;
    }
}
