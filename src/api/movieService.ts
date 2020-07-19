import { Movie, Movies, SearchParams } from './models';

const baseUrl = 'http://reactjs-cdp.herokuapp.com/movies';

export const getMovies = (opts: SearchParams): Promise<Movies> => {
  const url = new URL(baseUrl);

  const optsObj = opts as Record<string, string>;
  Object.keys(opts).forEach((key) => optsObj[key] && url.searchParams.append(key, optsObj[key]));

  return fetch(url.toString())
    .then((response) => response.json());
};

export const getMovie = (id: number): Promise<Movie> => fetch(`${baseUrl}/${id}`)
  .then((response) => response.json());
