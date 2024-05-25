import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieById } from "../services/tmdb";

const Movie = () => {
  //requested movie id
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const movieDetail = await fetchMovieById(id);
    setMovie(movieDetail);
    console.log(movieDetail);
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container bg-gradient-to-tr from-[#431043] to-[#27095b] mx-auto p-4 md:pt-20  ">
      <div className="flex h-screen flex-col  md:flex-row">
        {movie.poster_path && (
          <div className=" shadow-3xl w-full ">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className=" object-contain h-screen md:h-96 rounded-lg mb-4 md:mb-0 md:mr-4 "
            />
          </div>
        )}
        <div className="md:ml-6 object-contain">
          <h2 className="text-4xl font-bold mb-8   bg-gradient-to-r from-[#db3a57] to-[#e67349] bg-clip-text text-transparent text-center">
            {movie.title}
          </h2>
          <p className="mt-2 text-gray-400  text-justify  ">
            {movie.genres.map((genre) => (
              <button className="md:mx-5 border-2 border-green rounded-full p-2 bg-slate-400 text-white">
                {genre.name}
              </button>
            ))}
          </p>

          <h3 className="mt-2 text-white text-justify md:px-4  md:text-2xl">
            Release Date: {movie.release_date}
          </h3>

          <h4 className="mt-2 text-white text-justify md:px-4 md:text-2xl">
            Rating:{movie.vote_average}
          </h4>

          <h4 className="mt-2 text-white md:text-2xl md:px-4 text-justify  ">
            Status: {movie.status}
          </h4>
          <p className="mt-2 text-gray-400 text-justify md:px-4  md:w-[6rem">
            {" "}
            {movie.overview}
          </p>
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:mt-8 px-4 rounded-full">
            <Link to={"/"}>Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
