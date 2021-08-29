import React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trendings" fetchUrl={requests.fetchTrendings} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;
