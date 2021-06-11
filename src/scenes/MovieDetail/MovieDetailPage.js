import React, { useEffect } from "react";

import Layout from "components/Layout";
import MovieDetail from "./components/MovieDetail";
import Button from "components/Button";
import { WrapperButton } from "./components/Wrapper.styled";
import { Link } from "react-router-dom";

const data = {
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2NmYjZjOGItYTQ0ZC00YjcyLTk3MWUtYzdmZjY1MGNkMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
  "Title": "Greystoke: The Legend of Tarzan, Lord of the Apes",
  "Type": "movie",
  "Year": "1984",
  "imdbID": "tt0087365",
}

function MovieDetailPage() {
  useEffect(() => {
    document.title = 'Detail | Movie App';
  }, []);

  return (
    <Layout>
      <MovieDetail movie={data} />
      <WrapperButton>
        <Link to="/">
          <Button outline>Back</Button>
        </Link>
      </WrapperButton>
    </Layout>
  );
}

export default MovieDetailPage;
