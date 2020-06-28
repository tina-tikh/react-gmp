import { Movie, Movies, SearchParams } from '../store/types';

const baseUrl = 'http://reactjs-cdp.herokuapp.com/movies';

export const getMovies = (opts: SearchParams): Promise<Movies> => {
  const url = new URL(baseUrl);

  Object.keys(opts).forEach(key => url.searchParams.append(key, (opts as any)[key]));

  return fetch(url.toString())
    .then(response => response.json());
};

export const getMovie = (id: number): Promise<Movie> => {
  return fetch(`${baseUrl}/${id}`)
    .then(response => response.json());
};
