import { AppState } from './index';
import { Movie } from '../api/models';

export const getSearchMovies = (state: AppState): Movie[] => {
  return state.movies.search?.moviesIds.map((id) => state.movies.cache[id]);
};

export const getSearchTotal = (state: AppState): number => {
  return state.movies.search?.total;
};

export const getSimilarMovies = (state: AppState) => {
  return state.selectedMovie.similar.moviesIds.map((id) => state.movies.cache[id]);
};

export const getSelectedMovie = (state: AppState) => {
  const id = state.selectedMovie.movieId;
  return id && state.movies.cache[id];
};
