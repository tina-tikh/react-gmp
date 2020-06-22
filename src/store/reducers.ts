import {
  ActionTypes,
  Movies,
  MOVIES_RECEIVE,
  SEARCH_BY_SET, SEARCH_QUERY_SET,
  SearchBy,
  SearchParams,
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

const moviesReducer = (state  = initialMoviesState, action: ActionTypes) => {
  switch (action.type) {
    case MOVIES_RECEIVE:
      return {
        data: [...action.payload.data],
        total: action.payload.total
      };
    default:
      return state;
  }
};

const searchParamsReducer = (state  = initialSearchState, action: ActionTypes) => {
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

export { moviesReducer, searchParamsReducer, initialMoviesState, initialSearchState };
