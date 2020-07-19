import { fromJS, List, Record } from 'immutable';

import {
  ActionTypes,
  MOVIE_SELECT,
  MOVIE_UPDATE,
  MOVIES_RECEIVE,
  MOVIES_RECEIVE_SIMILAR,
  MoviesState,
  SelectedMovieState,
} from './types';
import { Movie } from '../api/models';

const initialMoviesState: Record<MoviesState> = fromJS({
  cache: {},
  search: {
    moviesIds: [],
    total: 0,
  },
});

const initialSelectedMovieState: Record<SelectedMovieState> = fromJS({
  movieId: null,
  similar: {
    moviesIds: [],
    total: 0,
  },
});

const cacheMovies = (state: Record<MoviesState>, data: List<Record<Movie>>) => data
  .reduce((acc, next) => acc
    .setIn(['cache', next.get('id')], next), state);

const moviesReducer = (
  state = initialMoviesState,
  action: ActionTypes,
): Record<MoviesState> => {
  switch (action.type) {
    case MOVIES_RECEIVE:
      return cacheMovies(state, fromJS(action.payload.data))
        .setIn(['search', 'total'], action.payload.total)
        .setIn(['search', 'moviesIds'], fromJS(action.payload.data.map((movie) => movie.id)));
    case MOVIES_RECEIVE_SIMILAR:
      return cacheMovies(state, fromJS(action.payload.data));
    case MOVIE_UPDATE:
      return state.mergeIn(['cache', action.payload.id], fromJS(action.payload));
    default:
      return state;
  }
};

const selectedMovieReducer = (
  state = initialSelectedMovieState,
  action: ActionTypes,
): Record<SelectedMovieState> => {
  switch (action.type) {
    case MOVIE_SELECT:
      return state.set('movieId', action.payload);
    case MOVIES_RECEIVE_SIMILAR:
      return state
        .setIn(['similar', 'total'], action.payload.total)
        .setIn(['similar', 'moviesIds'], fromJS(action.payload.data.map((movie) => movie.id)));
    default:
      return state;
  }
};

export {
  moviesReducer,
  selectedMovieReducer,
  initialMoviesState,
  initialSelectedMovieState,
};
