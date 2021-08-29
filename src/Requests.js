const API_KEY = "762d3effdc40ed411d5da40d288b11cd";

const requests = {
  fetchTrendings: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&page=3&with_genres=10749`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
};
export default requests;
