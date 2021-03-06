import React from "react"
import "./MovieCard.css"

import { Link } from "react-router-dom"

function MovieCard({ movie, genreList }) {
  const imageAPI = "https://image.tmdb.org/t/p/w342"

  const movieRatingColor = (rating) => {
    if (rating >= 8) {
      return "rating-green"
    } else if (rating >= 6.5) {
      return "rating-yellow"
    } else {
      return "rating-red"
    }
  }

  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        key={movie.id}
        style={{
          backgroundImage: `url(${imageAPI + movie.poster_path})`,
        }}
        className="movie-card"
      >
        <div className="movie-card-hidden">
          <div className="movie-title">{movie.name || movie.title}</div>
          <div className="movie-card-bottom">
            <div className="movie-rating-box">
              Rating:{" "}
              <span
                className={
                  "movie-rating " + movieRatingColor(movie.vote_average)
                }
              >
                {movie.vote_average}
              </span>
            </div>
            <div className="genres-container">
              {movie.genre_ids?.map((id) => (
                <span className="genre-span" key={id}>
                  {genreList[id]}
                </span>
              ))}
              {movie.genres?.map((genreObject) => {
                return (
                  <span className="genre-span" key={genreObject.id}>
                    {genreObject.name}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
