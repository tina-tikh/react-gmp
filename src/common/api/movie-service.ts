import movies from './movies-mock.json';

import { MoviesQueryResponse } from '../models';

export const retrieveMovies = (): Promise<MoviesQueryResponse> => {
  return Promise.resolve(movies);
};
