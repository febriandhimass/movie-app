import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import SearchBar from "./components/SearchBar";

function MovieListPage() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    document.title = 'List | Movie App';
  }, []);

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSubmit();
    }
  }

  return (
    <Layout>
      <SearchBar onChange={setSearchValue} onKeyPress={handleKeypress} value={searchValue}  />
    </Layout>
  );
}

export default MovieListPage;
