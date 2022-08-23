import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
            key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />

          );
        })}
      </div>
      {/*container*/}
    </div>
  );
}

export default Row;
