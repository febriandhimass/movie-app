import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import { MovieDesc, MovieItem, MovieImage, WrapperMovieList } from './MovieList.styled';
import Text from 'components/Text';
import { ModalStyled } from '../ModalStyled';
import { Col, Row } from 'react-bootstrap';

function MovieList({ movies }) {
  const [imagePopup, setImagePopup] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  
  const handleImageClick = (image) => {
    setImagePopup(image);
    setShowPopup(true)
  }

  return(
    <WrapperMovieList>
      <Row>
        {movies.length > 0 && movies.map((v, k) => (
          <Col xs={12} md={6} key={k}>
            <MovieItem>
              <MovieImage onClick={() => handleImageClick(v.Poster)}>
                <img src={v.Poster} alt={'poster_'+v.imdbID} />
              </MovieImage>
              <MovieDesc>
                <Text variant="heading" textAlign="center">{v.Title}</Text>
                <Link to={`/movie/${v.imdbID}`}>
                  <Button>Click for detail</Button>
                </Link>
              </MovieDesc>
            </MovieItem>
          </Col>
        ))}
      </Row>
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