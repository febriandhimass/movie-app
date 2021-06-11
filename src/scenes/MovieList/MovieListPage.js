import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Text from "components/Text";
import { useDispatch, useSelector } from "react-redux";

function MovieListPage() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.title = "List | Movie App";
  }, []);

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    axios
      .get(`${process.env.REACT_APP_OMDB_API}`, {
        params: {
          apikey: process.env.REACT_APP_OMDB_API_KEY,
          s: searchValue,
        },
      })
      .then(({ data }) => {
        if (data.Response === "True") {
          dispatch({ type: "SET_MOVIES", todo: data.Search });
        } else {
          dispatch({ type: "SET_MOVIES", todo: data.Error });
        }
      })
      .catch((e) => console.error(e));
  };

  const resultMovie = useSelector((state) => {
    return state.movies
  })

  return (
    <Layout>
      <SearchBar
        onChange={setSearchValue}
        onKeyPress={handleKeypress}
        value={searchValue}
      />
      {resultMovie &&
        (typeof resultMovie === "object" ? (
          <MovieList movies={resultMovie} />
        ) : (
          <Text variant="heading" textAlign="center">
            {resultMovie}
          </Text>
        ))}
    </Layout>
  );
}

export default MovieListPage;
