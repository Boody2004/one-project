const API_KEY = "a6732e38af9d0e8a87b98d92b6426492";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
