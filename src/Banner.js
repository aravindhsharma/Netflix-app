import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  //   useEffect(() => {
  //     fetch("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
  //       .then((res) => res.json())
  //       .then((json) => setMovie(json.data.movies));
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // pick a one ramdom movie
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* truncate text in banner description */}
        <h1 className="banner__description">
          {movie?.overview?.slice(0, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </header>
  );
}
//       {" "}
//       {/* <<< Background image */}
//       {/* title */}
//       {/* dive > 2 button */}
//       {/* decription */}
// {/* >>> */ }

export default Banner;
