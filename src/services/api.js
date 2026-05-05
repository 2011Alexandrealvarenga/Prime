import axios from 'axios';
// base url https://api.themoviedb.org/3/
// url da api: movie/550?api_key=5944ad4642e92ce6363ae933ad541e58

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
export default api;
