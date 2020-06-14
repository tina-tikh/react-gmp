import { Movie, Movies, SearchParams } from '../store/types';

const baseUrl = 'http://reactjs-cdp.herokuapp.com/movies';

export const getMovies = (opts: SearchParams): Promise<Movies> => {
  const url = new URL(baseUrl);

  Object.keys(opts).forEach(key => url.searchParams.append(key, (opts as any)[key]));
  console.log(url.searchParams);

  return fetch(url.toString())
    .then(response => response.json());
};

export const getMovie = (id: string): Promise<Movie> => {
  return fetch(`${baseUrl}/${id}`)
    .then(response => response.json());
};
