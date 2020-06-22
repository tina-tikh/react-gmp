import { initialMoviesState, initialSearchState, moviesReducer, searchParamsReducer } from './reducers';
import { receiveMovies, setSearchBy, setSearchQuery, setSortBy } from './actions';
import { ActionTypes, Movies, SearchBy, SortBy } from './types';

describe('Reducers', () => {
  const dumpAction: any = { type: '' };

  describe('Movies reducer', () => {
    it('should return the initial state', () => {
      expect(moviesReducer(undefined, dumpAction)).toBe(initialMoviesState);
    });

    it('should handle MOVIES_RECEIVE', () => {
      const movies: Movies = {
        data: [],
        total: 0
      };
      const action: ActionTypes = receiveMovies(movies);

      expect(moviesReducer(initialMoviesState, action)).toEqual(movies);
    });
  });

  describe('Search params reducer', () => {
    it('should return the initial state', () => {
      expect(searchParamsReducer(undefined, dumpAction)).toEqual(initialSearchState);
    });

    it('should handle SEARCH_QUERY_SET', () => {
      const q = 'q';
      const action: ActionTypes = setSearchQuery(q);
      const res = searchParamsReducer(initialSearchState, action);

      expect(res.search).toEqual(q);
    });

    it('should handle SEARCH_BY_SET', () => {
      const searchBy: SearchBy = SearchBy.Genres;
      const action: ActionTypes = setSearchBy(searchBy);
      const res = searchParamsReducer(initialSearchState, action);

      expect(res.searchBy).toEqual(searchBy);
    });

    it('should handle SORT_BY_SET', () => {
      const sortBy: SortBy = SortBy.Rating;
      const action: ActionTypes = setSortBy(sortBy);
      const res = searchParamsReducer(initialSearchState, action);

      expect(res.sortBy).toEqual(sortBy);
    });
  });
});
