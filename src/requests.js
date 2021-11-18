const API_KEY = "17d760b77fee6cef03a3a664557c431d";

// create request api key const
const requests = {
  // create request object
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, // create request url
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, // create request url
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // create request url
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // create request url
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // create request url
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // create request url
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // create request url
};

// export request object
export default requests;
