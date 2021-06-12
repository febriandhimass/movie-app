import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import Layout from "components/Layout";
import MovieDetail from "./components/MovieDetail";
import Button from "components/Button";
import { WrapperButton } from "./components/Wrapper.styled";

function MovieDetailPage() {
  const location = useLocation();
  const pathName = location.pathname;
  const movies = useSelector((state) => state.movies);
  const filteredMovie = movies.filter((v) => pathName.includes(v.imdbID));

  useEffect(() => {
    document.title = "Detail | Movie App";
  });

  return (
    <Layout>
      {filteredMovie.length > 0 ? (
        <>
          <MovieDetail movie={filteredMovie[0]} />
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
