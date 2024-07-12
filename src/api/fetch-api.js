import axios from "axios";
const API_TOKEN =
  " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTQwN2RmNTg2MTU4Yjk4OTcyYjlhMzhkZGFiZmE2NCIsIm5iZiI6MTcyMDcxMjkzMS45NzI3NzYsInN1YiI6IjY2Mzc3OGMzMzVkMWJjMDEyNjBhYTRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._SFjNNPvGF6ad7YUXFSpJA5DjKMd5lSRKWbFQdmrlw4";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const getProductsApi = async () => {
  const { data } = await axios.get("trending/movie/week", options);
  /*  console.log(data); */
  return data;
};
