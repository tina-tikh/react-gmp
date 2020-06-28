import {
  ActionTypes,
  MOVIE_RECEIVE,
  MOVIE_UPDATE,
  MOVIES_RECEIVE,
  MOVIES_RECEIVE_SIMILAR,
  MoviesState,
  SelectedMovieState,
} from './types';

const initialMoviesState: MoviesState = {
  cache: {},
  search: {
    moviesIds: [],
    total: 0
  }
};

const initialSelectedMovieState: SelectedMovieState = {
  movieId: null,
  similar: {
    moviesIds: [],
    total: 0
  }
};

const moviesReducer = (state = initialMoviesState, action: ActionTypes): MoviesState => {
  switch (action.type) {
    case MOVIES_RECEIVE:
      return {
        search: {
          total: action.payload.total,
          moviesIds: action.payload.data.map((movie) => movie.id)
        },
        cache: action.payload.data.reduce((acc, next) => {
          return {
            ...acc,
            [next.id]: next
          };
        }, { ...state.cache })
      };
    case MOVIES_RECEIVE_SIMILAR:
      return {
        ...state,
        cache: action.payload.data.reduce((acc, next) => {
          return {
            ...acc,
            [next.id]: next
          };
        }, { ...state.cache })
      };
    case MOVIE_UPDATE:
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

const selectedMovieReducer = (state: SelectedMovieState = initialSelectedMovieState, action: ActionTypes): SelectedMovieState => {
  switch (action.type) {
    case MOVIE_RECEIVE:
      return {
        ...state,
        movieId: action.payload
      };
    case MOVIES_RECEIVE_SIMILAR:
      return {
        ...state,
        similar: {
          moviesIds: action.payload.data.map((movie) => movie.id),
          total: action.payload.total
        }
      };
    default:
      return state;
  }
};

export {
  moviesReducer,
  selectedMovieReducer,
  initialMoviesState,
  initialSelectedMovieState
};
