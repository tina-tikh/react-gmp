import {
  ActionTypes,
  MOVIE_SELECT,
  MOVIE_UPDATE,
  Movies,
  MOVIES_RECEIVE,
  MOVIES_RECEIVE_SIMILAR,
  SEARCH_BY_SET,
  SEARCH_QUERY_SET,
  SearchBy,
  SearchParams,
  SelectedMovie,
  SORT_BY_SET,
  SortBy
} from './types';

const initialMoviesState: Movies = {
  data: [],
  total: 0
};

const initialSearchState: SearchParams = {
  search: '',
  searchBy: SearchBy.Title,
  sortBy: SortBy.Release
};

const initialSelectedMovieState: SelectedMovie = {
  movieId: null,
  similar: initialMoviesState
};

const moviesReducer = (state = initialMoviesState, action: ActionTypes) => {
  switch (action.type) {
    case MOVIES_RECEIVE:
      return action.payload;
    case MOVIE_UPDATE:
      return {
        ...state,
        data: state.data.map((movie) => {
          if (movie.id === action.payload.id) {
            return action.payload;
          }

          return movie;
        })
      };
    default:
      return state;
  }
};

const searchParamsReducer = (state = initialSearchState, action: ActionTypes) => {
  switch (action.type) {
    case SEARCH_QUERY_SET:
      return {
        ...state,
        search: action.payload
      };
    case SEARCH_BY_SET:
      return {
        ...state,
        searchBy: action.payload
      };
    case SORT_BY_SET:
      return {
        ...state,
        sortBy: action.payload
      };
    default:
      return state;
  }
};

const selectedMovieReducer = (state: SelectedMovie = initialSelectedMovieState, action: ActionTypes) => {
  switch (action.type) {
    case MOVIE_SELECT:
      return {
        ...state,
        movieId: action.payload
      };
    case MOVIES_RECEIVE_SIMILAR:
      return {
        ...state,
        similar: action.payload
      };
    default:
      return state;
  }
};

export {
  moviesReducer,
  searchParamsReducer,
  selectedMovieReducer,
  initialMoviesState,
  initialSearchState,
  initialSelectedMovieState
};
