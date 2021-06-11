import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import Layout from "components/Layout";
import MovieDetail from "./components/MovieDetail";
import Button from "components/Button";
import { WrapperButton } from "./components/Wrapper.styled";

function MovieDetailPage() {
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const movies = useSelector((state) => {
    return state.movies;
  });

  useEffect(() => {
    document.title = "Detail | Movie App";
    const getMovieDetail = () => {
      const pathName = location.pathname;
      const filteredMovie = movies.filter((v) => pathName.includes(v.imdbID));
      setMovie(filteredMovie);
    };
    getMovieDetail();
  }, []);

  return (
    <Layout>
      {movie.length > 0 ? (
        <>
          <MovieDetail movie={movie[0]} />
          <WrapperButton>
            <Link to="/">
              <Button outline>Back</Button>
            </Link>
          </WrapperButton>
        </>
      ) : null}
    </Layout>
  );
}

export default MovieDetailPage;
