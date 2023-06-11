import { useEffect, useState } from 'react';
import { Cast, CastResponse, MovieFullInfo } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MovieDetails {
  cast: Cast[];
  movieFull?: MovieFullInfo;
  isLoading: boolean;

}

export const useMovieDetails = (movieId: number): MovieDetails => {

  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {

    const movieDetailsPromise = movieDB.get<MovieFullInfo>(`/${movieId}`);
    const castPromise = movieDB.get<CastResponse>(`/${movieId}/credits`);

    const [movieDetailsResponse, castResponse] = await Promise.all([movieDetailsPromise, castPromise]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();

  }, []);

  return {
    ...state,
  };


};
