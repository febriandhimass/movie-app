import React, { useEffect } from "react";
import Layout from "components/Layout";

function MovieDetailPage() {
  useEffect(() => {
    document.title = 'Detail | Movie App';
  }, []);

  return (
    <Layout>
      <div>detail</div>
    </Layout>
  );
}

export default MovieDetailPage;
