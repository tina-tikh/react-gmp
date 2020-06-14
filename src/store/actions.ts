import {
  ActionTypes,
  Movies,
  MOVIES_RECEIVE,
  SEARCH_BY_SET,
  SEARCH_QUERY_SET,
  SearchBy,
  SORT_BY_SET,
  SortBy
} from './types';

export const receiveMovies = (movies: Movies): ActionTypes => ({
  type: MOVIES_RECEIVE,
  payload: movies
});

export const setSearchQuery = (opt: string): ActionTypes => ({
  type: SEARCH_QUERY_SET,
  payload: opt
});

export const setSearchBy = (opt: SearchBy): ActionTypes => ({
  type: SEARCH_BY_SET,
  payload: opt
});

export const setSortBy = (opt: SortBy): ActionTypes => ({
  type: SORT_BY_SET,
  payload: opt
});
