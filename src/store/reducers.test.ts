import {
  initialMoviesState,
  initialSearchState,
  initialSelectedMovieState,
  moviesReducer,
  searchParamsReducer,
  selectedMovieReducer
} from './reducers';
import {
  receiveMovies,
  receiveSimilarMovies,
  selectMovie,
  setSearchBy,
  setSearchQuery,
  setSortBy,
  updateMovie
} from './actions';
import { ActionTypes, Movie, Movies, SearchBy, SortBy } from './types';

describe('Reducers', () => {
  const dumpAction: any = { type: '' };

  describe('Movies reducer', () => {
    const movie = {
      id: 123
    } as Movie;
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

    it('should handle MOVIE_UPDATE', () => {
      const newMovie = {
        ...movie,
        title: "New title"
      } as Movie;
      const movies: Movies = {
        data: [movie],
        total: 1
      };

      const action: ActionTypes = updateMovie(newMovie);
      const newState = moviesReducer(movies, action);

      expect(newState.data[0]).toEqual(newMovie);
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

  describe('Selected movie reducer', () => {
    it('should return the initial state', () => {
      expect(selectedMovieReducer(undefined, dumpAction)).toEqual(initialSelectedMovieState);
    });

    it('should handle MOVIE_SELECT', () => {
      const id = 123;
      const action: ActionTypes = selectMovie(id);
      const res = selectedMovieReducer(initialSelectedMovieState, action);

      expect(res.movieId).toEqual(id);
    });

    it('should handle MOVIES_RECEIVE_SIMILAR', () => {
      const movies: Movies = {
        data: [],
        total: 0
      };
      const action: ActionTypes = receiveSimilarMovies(movies);
      const res = selectedMovieReducer(initialSelectedMovieState, action);

      expect(res.similar).toEqual(movies);
    });
  });
});
