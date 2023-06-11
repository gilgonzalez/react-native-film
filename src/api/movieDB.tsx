import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '41bec21962dcb31ac7156114329373c4',
    language: 'es-ES',
  },
});

export default movieDB;
