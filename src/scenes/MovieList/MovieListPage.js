import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Text from "components/Text";
import { useDispatch } from "react-redux";

function MovieListPage() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    document.title = "List | Movie App";
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setPage(1);
    setMovieList([]);
    setErrorMessage("");
    setNoData(false);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      if (searchValue.length > 0) {
        handleSubmit(page);
      } else {
        setErrorMessage("Please input some text");
      }
    }
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        handleSubmit(page);
      }
    }
  };

  const handleSubmit = (page) => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`${process.env.REACT_APP_OMDB_API}`, {
          params: {
            apikey: process.env.REACT_APP_OMDB_API_KEY,
            s: searchValue,
            page: page,
          },
        })
        .then(({ data }) => {
          if (data.Response === "True") {
            const newList = movieList.concat(data.Search);
            setMovieList(newList);
            dispatch({ type: "SET_MOVIES", todo: newList });
            setErrorMessage("");
            const newPage = page + 1;
            setPage(newPage);
          } else {
            if (page === 1) {
              setErrorMessage(data.Error);
            }
            if (data.Error === "Movie not found!") setNoData(true);
          }
        })
        .catch((e) => console.error(e))
        .finally(() => setLoading(false));
    }, 1500);
  };

  return (
    <Layout>
      <SearchBar
        onChange={handleSearch}
        onKeyPress={handleKeypress}
        value={searchValue}
      />
      {errorMessage ? (
        <Text variant="heading" textAlign="center">
          {errorMessage}
        </Text>
      ) : (
        movieList.length > 0 && <MovieList movies={movieList} />
      )}
      {loading ? <Text textAlign="center">Loading data ...</Text> : ""}
      {noData ? <Text textAlign="center">No data anymore ...</Text> : ""}
    </Layout>
  );
}

export default MovieListPage;
