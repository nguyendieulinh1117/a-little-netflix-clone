import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleMovie = (movie) => {
    setMovie(movie);
  };
  const closePopup = () => {
    setMovie(null);
  };
  console.log(movie);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies &&
          movies.map(
            (movie, index) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  onClick={() => handleMovie(movie)}
                  key={index}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                />
              )
          )}
      </div>
      {movie !== null && (
        <div className="poster__detail">
          <div className="hamburger" onClick={closePopup}>
            <span className="line"></span>
          </div>
          <div className="poster__content">
            <h3>{movie?.name || movie?.title}</h3>
            <span>
              {movie?.first_air_date || movie?.release_date}|{movie?.id}
            </span>
            <p>{movie?.overview}</p>
            <button>Play</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Row;
