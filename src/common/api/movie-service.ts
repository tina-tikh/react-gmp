import movies from './movies-mock.json';

import { Movie } from '../models';

export const retrieveMovies = (): Promise<Movie[]> => {
  return Promise.resolve(movies.data);
};

export const getMovie = (id: number): Promise<Movie> => {
  const movie: Movie = movies.data.find((movie: Movie) => movie.id === id);
  return Promise.resolve(movie);
};

export const getSimilarMovies = (id: number): Promise<Movie[]> => {
  return Promise.resolve(movies.data);
};

export const searchBy = (q: string): Promise<Movie[]> => {
  return Promise.resolve(movies.data);
};
