import Text from 'components/Text';
import React from 'react';
import { MovieDesc, MovieImage, WrapperMovieDetail } from './MovieDetail.styled';

function MovieDetail({ movie }) {
  return (
    <WrapperMovieDetail>
      <MovieImage>
        <img src={movie.Poster} alt={`poster_${movie.imdbID}`} />
      </MovieImage>
      <MovieDesc>
        <Text textAlign="center" variant="heading">{movie.Title}</Text>
        <Text textAlign="center">IMDB ID: {movie.imdbID}</Text>
        <Text textAlign="center">Type: {movie.Type}</Text>
        <Text textAlign="center">Year: {movie.Year}</Text>
      </MovieDesc>
    </WrapperMovieDetail>
  );
}

export default MovieDetail;