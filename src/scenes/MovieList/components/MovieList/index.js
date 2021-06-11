import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { MovieDesc, MovieItem, MovieImage, WrapperMovieList } from './MovieList.styled';
import Text from 'components/Text';
import { ModalStyled } from '../ModalStyled';

function MovieList({ movies }) {
  const [imagePopup, setImagePopup] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const handleImageClick = (image) => {
    setImagePopup(image);
    setShowPopup(true)
  }

  return(
    <WrapperMovieList>
      {movies.length > 0 && movies.map((v, k) => (
        <MovieItem key={k}>
          <MovieImage onClick={() => handleImageClick(v.Poster)}>
            <img src={v.Poster} alt={'poster_'+v.imdbID} />
          </MovieImage>
          <MovieDesc>
            <Text variant="heading">{v.Title}</Text>
            <Link to={`/movie/${v.imdbID}`}>
              <Button>Click for detail</Button>
            </Link>
          </MovieDesc>
        </MovieItem>
      ))}
      <ModalStyled show={showPopup} onHide={() => setShowPopup(false)}>
        <ModalStyled.Header closeButton />
        <ModalStyled.Body>
          <img src={imagePopup} alt="poster" />
        </ModalStyled.Body>
      </ModalStyled>
    </WrapperMovieList>
  );
}

export default MovieList;