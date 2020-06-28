import { Movie, Movies, SearchParams } from '../api';

export interface PagedMovies {
  moviesIds: number[],
  total: number
}

export interface MoviesState {
  cache: {
    [key: number]: Movie;
  },
  search: PagedMovies
}

export interface SelectedMovieState {
  movieId: number,
  similar: PagedMovies
}

export const MOVIES_RECEIVE = 'MOVIES_RECEIVE';
export const MOVIES_SEARCH = 'MOVIES_SEARCH';
export const MOVIE_RECEIVE = 'MOVIE_RECEIVE';
export const MOVIE_UPDATE = 'MOVIE_UPDATE';
export const MOVIES_RECEIVE_SIMILAR = 'MOVIES_RECEIVE_SIMILAR';

interface ReceiveMoviesAction {
  type: typeof MOVIES_RECEIVE;
  payload: Movies;
}

interface SearchMoviesAction {
  type: typeof MOVIES_SEARCH;
  payload: SearchParams
}

interface SelectMovie {
  type: typeof MOVIE_RECEIVE;
  payload: number;
}

interface UpdateMovie {
  type: typeof MOVIE_UPDATE;
  payload: Movie;
}

interface ReceiveSimilarMovies {
  type: typeof MOVIES_RECEIVE_SIMILAR;
  payload: Movies;
}

export type ActionTypes =
  ReceiveMoviesAction
  | SearchMoviesAction
  | SelectMovie
  | UpdateMovie
  | ReceiveSimilarMovies;
