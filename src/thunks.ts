import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

import { AppState, getSelectedMovie } from './store';
import {
  receiveMovies,
  receiveSimilarMovies,
  selectMovie,
  updateMovie,
} from './store/actions';
import { ActionTypes } from './store/types';
import {
  Movie, Movies, MovieService, SearchBy, SearchParams,
} from './api';

export const thunkReceiveMovies = (
  opts?: SearchParams,
): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch: Dispatch): Promise<void> => {
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveMovies(movies),
  );
};

export const thunkReceiveSimilarByGenre = (
  genre: string,
): ThunkAction<void, AppState, null, ActionTypes> => async (dispatch: Dispatch): Promise<void> => {
  const opts = {
    search: genre,
    searchBy: SearchBy.Genres,
  };
  const movies: Movies = await MovieService.getMovies(opts);
  dispatch(
    receiveSimilarMovies(movies),
  );
};

export const thunkSelectMovie = (
  movieId: number,
): ThunkAction<void, AppState, null, ActionTypes> => async (
  dispatch: Dispatch,
  getState: () => AppState,
): Promise<void> => {
  dispatch(selectMovie(movieId));

  const cachedMovie = getSelectedMovie(getState());

  if (!cachedMovie) {
    const movie: Movie = await MovieService.getMovie(movieId);
    dispatch(
      updateMovie(movie),
    );
  }
};
