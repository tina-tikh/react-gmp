import { createSelector } from 'reselect';
import { List, Record } from 'immutable';

import { MovieCache, MoviesState, SelectedMovieState } from './types';
import { AppState } from './configureStore';

const getFromCache = (ids: List<number>, cache: MovieCache) => ids.map((id) => cache.get(id));

export const getMoviesState = (state: AppState): Record<MoviesState> => state.movies;
export const getSelectedMovieState = (
  state: AppState,
): Record<SelectedMovieState> => state.selectedMovie;

export const getMovies = createSelector(
  [getMoviesState],
  (movies) => movies.get('search'),
);
export const getCache = createSelector(
  [getMoviesState],
  (movies) => movies.get('cache'),
);
export const getSearchMoviesIds = createSelector(
  [getMovies],
  (movies) => movies.get('moviesIds'),
);
export const getSearchMoviesTotal = createSelector(
  [getMovies],
  (movies) => movies.get('total'),
);
export const getSimilarMoviesIds = createSelector(
  [getSelectedMovieState],
  (movies) => movies.getIn(['similar', 'moviesIds']),
);
export const getSimilarMoviesTotal = createSelector(
  [getSelectedMovieState],
  (movies) => movies.getIn(['similar', 'total']),
);
export const getSelectedMovieId = createSelector(
  [getSelectedMovieState],
  (movies) => movies.get('movieId'),
);
export const getSearchMovies = createSelector([getSearchMoviesIds, getCache], getFromCache);
export const getSimilarMovies = createSelector([getSimilarMoviesIds, getCache], getFromCache);
export const getSelectedMovie = createSelector(
  [getSelectedMovieId, getCache],
  (id, cache) => cache.get(id),
);
