
const API_KEY = "7ece740f8a7ca4410e560dd53721d2e4";

const requests = {
    fetchTrending : `/trending/movie/day?api_key=${API_KEY}`,
    fetchTopRated : `/tv/top_rated?api_key=${API_KEY}`,
    fetchActionMovies:`/genre/movie/list?api_key=${API_KEY}&with_genres=28 `

};

export default requests;