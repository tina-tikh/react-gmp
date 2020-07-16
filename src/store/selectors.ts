import { createSelector } from 'reselect';
import { List, Map } from 'immutable';

import { Movie } from '../api/models';
import { AppState } from './index';

const getFromCache = (ids: List<number>, cache: Map<number, Movie>) => ids.map((id) => cache.get(id));

export const getMoviesState = (state: AppState) => state.movies;
export const getSelectedMovieState = (state: AppState) => state.selectedMovie;

export const getMovies = createSelector([getMoviesState], (movies) => movies.get('search'));
export const getCache = createSelector([getMoviesState], (movies) => movies.get('cache'));
export const getSearchMoviesIds = createSelector([getMovies], (movies) => movies.get('moviesIds'));
export const getSimilarMoviesIds = createSelector([getSelectedMovieState], (movies) => movies.getIn(['similar', 'moviesIds']));
export const getSimilarMoviesTotal = createSelector([getSelectedMovieState], (movies) => movies.getIn(['similar', 'total']));
export const getSelectedMovieId = createSelector([getSelectedMovieState], (movies) => movies.get('movieId'));
export const getSearchMovies = createSelector([getSearchMoviesIds, getCache], getFromCache);
export const getSearchTotal = createSelector([getMoviesState], (movies) => movies.getIn(['search', 'total']));
export const getSimilarMovies = createSelector([getSimilarMoviesIds, getCache], getFromCache);
export const getSelectedMovie = createSelector([getSelectedMovieId, getCache], (id, cache) => cache.get(id));
