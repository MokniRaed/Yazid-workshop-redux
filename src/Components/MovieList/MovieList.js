import React from 'react'
import { MoviesApi } from '../../MoviesApi'
import MovieCard from '../MovieCard/MovieCard'
import { useSelector } from 'react-redux'

function MovieList() {

    const Movies = useSelector((state) => state.movies)
  return (
    <div>
    {Movies.map((movie) => (
      <MovieCard
        title={movie.title}
        description={movie.description}
        imageUrl={movie.imgUrl}
        date={movie.date}
        rate={movie.rate}
        id={movie._id}
      />
    ))}
  </div>
  )
}

export default MovieList
